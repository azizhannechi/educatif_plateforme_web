class Course {
  constructor({
    id,
    title,
    description,
    type, // "TD", "TP", "Cours"
    createdBy,
    createdAt = new Date(),
    status = "draft", // draft | published
    price = 0,
    category,
    thumbnailUrl = null,
    resources = []
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.type = type;
    this.createdBy = createdBy;
    this.createdAt = createdAt;
    this.status = status;
    this.price = price;
    this.category = category;
    this.thumbnailUrl = thumbnailUrl;
    this.resources = resources;
  }
}

export default Course;
