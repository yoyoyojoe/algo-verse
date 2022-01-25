CREATE TABLE "users" (
	"username" varchar(100) NOT NULL UNIQUE,
	"password" varchar(100) NOT NULL,
	"session_id" uuid NOT NULL UNIQUE,
	"score" integer NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("username")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "algorithms" (
	"question_id" serial NOT NULL,
	"question" varchar(2000) NOT NULL,
	"answers" varchar(2000) NOT NULL,
	"time_complexity" varchar(25) NOT NULL,
	"space_complexity" varchar(25) NOT NULL,
	"explanation" varchar(1000) NOT NULL,
	"difficulty" varchar(25) NOT NULL,
	CONSTRAINT "algorithms_pk" PRIMARY KEY ("question_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "leaderboard" (
	"username" varchar(100) NOT NULL
) WITH (
  OIDS=FALSE
);





ALTER TABLE "leaderboard" ADD CONSTRAINT "leaderboard_fk0" FOREIGN KEY ("username") REFERENCES "users"("username");




