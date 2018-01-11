package fi.kari.blog;

public class Login {

  private String name;
  private String passwd;
  private String status;
  private Long id;
  
  public Login() {
  }

  public Login(String name, String passwd) {
    this.name = name;
    this.passwd = passwd;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getPasswd() {
    return passwd;
  }

  public void setPasswd(String passwd) {
    this.passwd = passwd;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }
    
}
