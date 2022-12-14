CREATE TABLE URLS(
    id VARCHAR(20),
    url VARCHAR(400) NOT NULL,
    epoch BIGINT NOT NULL,
    clicks INT default 0,
    PRIMARY KEY(id)
);

CREATE TABLE PASTEBIN(
    id VARCHAR(20),
    title varchar(100) NOT NULL,
    content TEXT,
    epoch BIGINT NOT NULL,
    PRIMARY KEY(id)
);