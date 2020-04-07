package com.nxtlife.efkon.license.dao.jpa;

import com.nxtlife.efkon.license.entity.project.product.ProjectProduct;
import com.nxtlife.efkon.license.view.project.product.ProjectProductResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;


@Repository
public interface ProjectProductJpaDao extends JpaRepository<ProjectProduct, Long> {

    public List<ProjectProductResponse> findByProjectIdAndActive(Long ProjectId,Boolean active);
    
    public Boolean existsByProductDetailIdAndActive(Long productDetailId, Boolean active);

    public Boolean existsByProjectIdAndProductDetailId(Long projectId,Long projectDetailId);

    public ProjectProduct findByIdAndActive(Long id,Boolean active);

    @Modifying
    @Query(value = "update ProjectProduct set active = false, modified_by =?2, modified_at =?3 where id =?1")
    public int delete(Long id, Long userId, Date date);

}
