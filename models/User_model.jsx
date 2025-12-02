class User {
  constructor({
    id,
    email,
    name,
    role = "student",
    createdAt = new Date(),
    lastLogin = null,
    profilePicture = null
  }) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.role = role;
    this.createdAt = createdAt;
    this.lastLogin = lastLogin;
    this.profilePicture = profilePicture;
  }

  toFirestore() {
    return {
      email: this.email,
      name: this.name,
      role: this.role,
      createdAt: this.createdAt,
      lastLogin: this.lastLogin,
      profilePicture: this.profilePicture
    };
  }
}

export default User;
