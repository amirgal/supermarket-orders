CREATE DATABASE supermarket_db;

CREATE TABLE public.cart_items
(
    o_id integer,
    p_id character varying(20),
    qty integer
);

CREATE TABLE public.orders
(
    o_id integer NOT NULL,
    email character varying(30),
    total_price integer,
    PRIMARY KEY (o_id)
);

CREATE TABLE public.products
(
    p_id character varying(20) NOT NULL,
    p_name character varying(20),
    price integer,
    img character varying(200),
    PRIMARY KEY (p_id)
);

INSERT INTO products VALUES(
    '42fsd',
    'computer',
    4050,
    'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'
);

INSERT INTO products VALUES(
    'gdf52f',
    'yacht',
    100000,
    'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'
);

INSERT INTO products VALUES(
    'gfs53g',
    'keyboard',
    300,
    'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'
);

INSERT INTO products VALUES(
    'j534f',
    'car',
    30000,
    'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'
);

INSERT INTO products VALUES(
    'kj32f',
    'chair',
    430,
    'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'
);