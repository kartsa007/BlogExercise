package fi.kari.blog;

import javax.persistence.*;

@Entity
public class Comment {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  private String comment;

  private Long blog_id;

  private String author;

  public Comment() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getComment() {
    return comment;
  }

  public void setComment(String comment) {
    this.comment = comment;
  }

  public Long getBlog_id() {
    return blog_id;
  }

  public void setBlog_id(Long blog_id) {
    this.blog_id = blog_id;
  }

  public String getAuthor() {
    return author;
  }

  public void setAuthor(String author) {
    this.author = author;
  }
}
