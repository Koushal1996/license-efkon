package com.nxtlife.efkon.license.dao.jpa;

import com.nxtlife.efkon.license.entity.project.product.ProjectProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProjectProductJpaDao extends JpaRepository<ProjectProduct, Long> {

}
