package fi.kari.blog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
