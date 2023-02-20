package vn.truongnx.app.service.mapper;

import org.mapstruct.*;
import vn.truongnx.app.domain.Product;
import vn.truongnx.app.service.dto.ProductDTO;

/**
 * Mapper for the entity {@link Product} and its DTO {@link ProductDTO}.
 */
@Mapper(componentModel = "spring")
public interface ProductMapper extends EntityMapper<ProductDTO, Product> {}
