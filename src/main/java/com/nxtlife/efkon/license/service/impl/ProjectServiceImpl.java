package com.nxtlife.efkon.license.service.impl;

import com.nxtlife.efkon.license.dao.jpa.*;
import com.nxtlife.efkon.license.entity.project.Project;
import com.nxtlife.efkon.license.entity.user.User;
import com.nxtlife.efkon.license.entity.user.UserRole;
import com.nxtlife.efkon.license.ex.ValidationException;
import com.nxtlife.efkon.license.service.BaseService;
import com.nxtlife.efkon.license.service.ProjectService;
import com.nxtlife.efkon.license.util.AuthorityUtils;
import com.nxtlife.efkon.license.view.project.ProjectRequest;
import com.nxtlife.efkon.license.view.project.ProjectResponse;
import com.nxtlife.efkon.license.view.user.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Service("projectServiceImpl")
@Transactional
public class ProjectServiceImpl extends BaseService implements ProjectService {

    private static PasswordEncoder userPasswordEncoder = new BCryptPasswordEncoder();

    @Autowired
    private ProjectJpaDao projectDao;

    @Autowired
    private ProjectTypeJpaDao projectTypeDao;

    @Autowired
    private RoleJpaDao roleDao;

    @Autowired
    private UserJpaDao userDao;

    @Autowired
    private UserRoleJpaDao userRoleDao;

    @Autowired
    private ProjectProductJpaDao projectProductDao;

    public void validateCustomer(ProjectRequest request) {
        List<ProjectResponse> projectResponseList = projectDao.findByCustomerEmailAndActive(request.getCustomerEmail(), true);
        if (!projectResponseList.isEmpty() && projectResponseList != null) {
            if (!request.getCustomerName().equals(projectResponseList.get(0).getCustomerName())) {
                throw new ValidationException(String.format("This email (%s) is already exist", request.getCustomerEmail()));
            }
        }
    }


    public void validate(ProjectRequest request) {
        if (!projectTypeDao.existsById(request.getProjectTypeId())) {
            throw new ValidationException(String.format("Project type (%s) not found", mask(request.getProjectTypeId())));
        }
        Long projectManagerRoleId = roleDao.findIdByName("Project Manager");
        Set<Long> roleIds;
        if (userDao.existsById(request.getProjectManagerId())) {
            roleIds = userRoleDao.findRoleIdsByUserId(request.getProjectManagerId());
            if (!roleIds.contains(projectManagerRoleId)) {
                throw new ValidationException(String.format("Project Manager (%s) not exist", mask(request.getProjectManagerId())));
            }
        } else {
            throw new ValidationException(String.format("Project Manager (%s) not exist", mask(request.getProjectManagerId())));
        }
        validateCustomer(request);

    }

    @Override
    @Secured(AuthorityUtils.PROJECT_CREATE)
    public ProjectResponse save(ProjectRequest request) {
        validate(request);
        UserResponse existUser = userDao.findByEmailAndActive(request.getCustomerEmail(), true);
        Long customerRoleId = roleDao.findIdByName("Customer");
        User user;
        Project project = request.toEntity();
        if (existUser != null) {
            if (!existUser.getUsername().equals(request.getCustomerEmail())) {
                userRoleDao.save(new UserRole(unmask(existUser.getId()), customerRoleId));
            }
        } else {
            user = userDao.save(new User(request.getCustomerName(), request.getCustomerEmail(), userPasswordEncoder.encode("12345"), request.getCustomerEmail(),
                    project.getIsEmailSend(), request.getCustomerContactNo()));
            userRoleDao.save(new UserRole(user.getId(), customerRoleId));
        }

        project.settProjectTypeId(request.getProjectTypeId());
        project.setUserId(request.getProjectManagerId());
        projectDao.save(project);
        ProjectResponse response = projectDao.findResponseById(project.getId());
        response.setProjectTypeResponse(projectTypeDao.findResponseById(request.getProjectTypeId()));
        response.setProducts(projectProductDao.findByProjectIdAndActive(project.getId(), true));
        return response;


    }

    /**
     * return a list of projects which is active
     *
     * @return List of <tt>ProjectResponse</tt>
     */
    @Override
    public List<ProjectResponse> findAll() {
        List<ProjectResponse> projects = projectDao.findByActive(true);
        projects.stream().forEach(project ->
        {
            project.setProjectTypeResponse(projectTypeDao.findResponseById(unmask(project.getId())));
            project.setProducts(projectProductDao.findByProjectIdAndActive(unmask(project.getId()), true));
        });

        return projects;

    }


}
