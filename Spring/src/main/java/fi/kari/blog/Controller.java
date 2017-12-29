package fi.kari.blog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;
import javax.ws.rs.Consumes;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
public class Controller {

    @Autowired
    BlogRepository bdb;
    @Autowired
    CommentRepository cdb;
    @Autowired
    AuthorRepository adb;

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @RequestMapping(value="/signin", method= POST)
    public Author signIn(@RequestBody Login inp) {
      EntityManager session = entityManagerFactory.createEntityManager();
      try {
        String query = "select * FROM author WHERE NAME=:name";
        Author author = (Author)session.createNativeQuery(query)
          .setParameter("name", inp.getName())
          .getSingleResult();
        
        return null;
      }
      catch (NoResultException e){
        return null;
      }
      finally {
        if(session.isOpen()) session.close();
      }
    }

    @RequestMapping(value="/signup", method= POST)
    public Login signUp(@RequestBody Login inp) {
      EntityManager session = entityManagerFactory.createEntityManager();
      try {
        String query = "select  * FROM author WHERE NAME=:name";
        Author author = (Author)session.createNativeQuery(query)
          .setParameter("name", inp.getName())
          .getSingleResult();
        inp.setStatus("ok");
        return inp;
      }
      catch (NoResultException e){
        inp.setStatus("Käyttäjää ei ole olemassa");
        return inp;
      }
      finally {
        if(session.isOpen()) session.close();
      }
    }

    @RequestMapping(value="/blog", method= GET)
    public Iterable<Blog> getBlogs() {
        return bdb.findAll();
    }

    @RequestMapping(value="/blog/{id}", method= GET)
    public String getBlog(@PathVariable() long id) {
        return "Get block" + id;
    }

    @RequestMapping(value="/blog/{id}/comment", method= GET)
    public String getBlogComments(@PathVariable() long id) {
        return "Get comments of " + id;
    }

    @RequestMapping(value="/blog/{blogId}/comment/{commentId}", method= GET)
    public String getBlogComment(@PathVariable() long blogId, @PathVariable() long commentId) {
        return "Get comment " + commentId +  " of blog " + blogId;
    }

    @RequestMapping(value="/blog", method = POST)
    public Blog postBlog(@RequestBody Blog blog) {
        Blog b = blog;
        Blog s = bdb.save(b);
        return s;
    }

    @RequestMapping(value="/comment", method = POST)
    public Comment postComment(@RequestBody Comment comment) {
        Comment c = comment;
        Comment o = cdb.save(c);
        return o;
    }
}
