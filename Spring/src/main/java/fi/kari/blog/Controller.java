package fi.kari.blog;

import java.util.HashSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManagerFactory;

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
    public Login signIn(@RequestBody Login inp) {
      Author a1 = adb.findByName(inp.getName());
      if (a1 == null) {
        inp.setStatus("Käyttäjää ei ole olemassa");
      } else {
        if (inp.getPasswd().equals(a1.getPasswd())) {
          inp.setStatus("ok");
          inp.setId(a1.getId());
          
        } else {
          inp.setStatus("failed");
        }      
      }
      inp.setPasswd("****");
      return inp;
    }

    @RequestMapping(value="/signup", method= POST)
    public Login signUp(@RequestBody Login inp) {
      Author a1 = adb.findByName(inp.getName());
      if (a1 == null) {
        Author author = new Author(inp.getName());
        author.setUserRole("user");
        author.setPasswd(inp.getPasswd());
        adb.save(author);
        inp.setStatus("ok");
        inp.setPasswd("*****");
      } else {
        inp.setStatus("Already exists");
        inp.setPasswd("*****");
      }
      return inp;
    }

    @RequestMapping(value="/blog", method= GET)
    public Iterable<Blog> getBlogs() {
        return bdb.findAll();
    }

    @RequestMapping(value="/blog/{id}", method= GET)
    public Blog getBlog(@PathVariable() long id) {
        return bdb.findOne(id);
    }

    @RequestMapping(value="/blog/{id}/comment", method= GET)
    public Iterable<Comment> getBlogComments(@PathVariable() long id) {
      return cdb.findById(id);
    }

    @RequestMapping(value="/blog/{blogId}/comment/{commentId}", method= GET)
    public String getBlogComment(@PathVariable() long blogId, @PathVariable() long commentId) {
      return "Get comment " + commentId +  " of blog " + blogId;
    }

    @RequestMapping(value="/blog", method = POST)
    public Blog postBlog(@RequestBody Blog blog) {
      return bdb.save(blog);
    }

    @RequestMapping(value="/comment", method = POST)
    public Comment postComment(@RequestBody Comment comment) {
      return cdb.save(comment);
    }
}
