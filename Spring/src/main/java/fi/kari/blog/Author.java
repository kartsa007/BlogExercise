package fi.kari.blog;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    private String name;
//    private Blog[] blogs;
    //@ManyToOne
    //@JoinColumn(name = "comment_id")
    //private Comment[] comments;

    public Author() {
    }

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

  //  @OneToMany(mappedBy = "author", cascade = CascadeType.ALL)
    //@JoinColumn(name = "block_id")
    public Blog[] getBlogs() {
 //       return blogs;
        return null;
    }

    public void setBlogs(Blog[] blogs) {
        //this.blogs = blogs;
    }

    public Comment[] getComments() {
        //return comments;
        return null;
    }

    public void setComments(Comment[] comments) {
        //this.comments = comments;
    }


}
