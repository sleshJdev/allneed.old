# Users SCHEMA

# --- !Ups

CREATE TABLE IF NOT EXISTS "user" (
  id       BIGSERIAL    NOT NULL,
  name     VARCHAR(30)  NOT NULL,
  surname  VARCHAR(30)  NOT NULL,
  email    VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  CONSTRAINT pk_user_id PRIMARY KEY (id)
);

INSERT INTO "user" (name, surname, email, password) VALUES
  ('Admin', 'Admin', 'admin@mail.com', 'admin');

# --- !Downs

DROP TABLE user;