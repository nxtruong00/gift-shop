package vn.truongnx.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.truongnx.app.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
