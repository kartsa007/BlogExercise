package fi.kari.blog;

import com.sun.xml.internal.bind.v2.model.core.ID;
import org.springframework.data.repository.CrudRepository;

public interface AuthorRepository extends CrudRepository<Blog, Long> {
}

