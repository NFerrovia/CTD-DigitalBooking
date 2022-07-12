
INSERT INTO cities(id, name, name_country) VALUES (1, 'Dubai','United Arab Emirates');
INSERT INTO cities(id, name, name_country) VALUES (2, 'Cancún','Mexico');
INSERT INTO cities(id, name, name_country) VALUES (3, 'Estambul','Turkey');
INSERT INTO cities(id, name, name_country) VALUES (4, 'New York','United States of America');
INSERT INTO cities(id, name, name_country) VALUES (5, 'Miami','United States of America');
INSERT INTO cities(id, name, name_country) VALUES (6, 'Paris','France');
INSERT INTO cities(id, name, name_country) VALUES (7, 'Doha','Qatar');
INSERT INTO cities(id, name, name_country) VALUES (8, ' Londres','England');
INSERT INTO cities(id, name, name_country) VALUES (9, 'Cairo','Egypt');
INSERT INTO cities(id, name, name_country) VALUES (10, 'Madrid','Spain');

INSERT INTO categories(id, title, description, url_image) VALUES (1, 'Hotels','807.105 hoteles', 'https://g1bucket-01.s3.amazonaws.com/img/categories-1.jpg');
INSERT INTO categories(id, title, description, url_image) VALUES (2, 'Departments','807.105 hoteles', 'https://g1bucket-01.s3.amazonaws.com/img/categories-2.jpg');
INSERT INTO categories(id, title, description, url_image) VALUES (3, 'Hostels','807.105 hoteles', 'https://g1bucket-01.s3.amazonaws.com/img/categories-3.jpg');
INSERT INTO categories(id, title, description, url_image) VALUES (4, 'Bed and Breakfast','807.105 hoteles', 'https://g1bucket-01.s3.amazonaws.com/img/categories-4.jpg');

INSERT INTO type_of_policies(id, title, description) VALUES (1, 'Rule','Rules and Policy');
INSERT INTO type_of_policies(id, title, description) VALUES (2, 'HealthAndSecurity','Health and security policy');
INSERT INTO type_of_policies(id, title, description) VALUES (3, 'Cancelation','Cancelation policy');

INSERT INTO products(id, name, description, category_id, city_id,policy_id) VALUES (1, 'Trendy Upgraded Studio Apartment in JLT', 'Key View is excited to welcome you to this trendy upgraded studio apartment in JLT. This unique place has a style all its own. Perfectly situated, you are minutes drive away from the lively Dubai Marina, JBR beach and exclusive Palm Jumeirah.', 2, 1,1);
INSERT INTO images(id, title, url, product_id) VALUES (1, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-1.jpg', 1);
INSERT INTO images(id, title, url, product_id) VALUES (2, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-2.jpg', 1);
INSERT INTO images(id, title, url, product_id) VALUES (3, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-3.jpg', 1);
INSERT INTO images(id, title, url, product_id) VALUES (4, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-4.jpg', 1);
INSERT INTO images(id, title, url, product_id) VALUES (5, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-5.jpg', 1);
INSERT INTO images(id, title, url, product_id) VALUES (6, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-6.jpg', 1);

INSERT INTO products(id, name, description, category_id, city_id,policy_id) VALUES (2, 'House in front of the eco-park and near the sea', 'Maximum stay for 2 people in 1 room available for visits, 2 full bathrooms. Living room (entertainment space with access to Netflix), kitchen - dining room. It also has a public balcony with a view of the mangrove, as well as garage space for 1 car.', 3, 2,1);
INSERT INTO images(id, title, url, product_id) VALUES (7, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-7.jpg', 2);
INSERT INTO images(id, title, url, product_id) VALUES (8, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-8.jpg', 2);
INSERT INTO images(id, title, url, product_id) VALUES (9, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-9.jpg', 2);
INSERT INTO images(id, title, url, product_id) VALUES (10, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-10.jpg', 2);

INSERT INTO products(id, name, description, category_id, city_id) VALUES (3, 'Tripple room 4', 'Our newly opened hotel is only 5 minutes walking distance from Yenikapi metro Aksaray tram stops. Our hotel is protected by the latest security camera systems. It is one of the quietest streets in Aksaray.', 1, 3);
INSERT INTO images(id, title, url, product_id) VALUES (11, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-11.jpg', 3);
INSERT INTO images(id, title, url, product_id) VALUES (12, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-12.jpg', 3);
INSERT INTO images(id, title, url, product_id) VALUES (13, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-13.jpg', 3);
INSERT INTO images(id, title, url, product_id) VALUES (14, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-14.jpg', 3);
INSERT INTO images(id, title, url, product_id) VALUES (15, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-15.jpg', 3);

INSERT INTO products(id, name, description, category_id, city_id) VALUES (4, 'Room in hotel hosted by Millennium Downtown', 'Experience the stunning architecture of The Oculus and explore the One World Observatory and 9/11 Memorial Museum. Stay at the heart of the Financial District with unobstructed panoramas of Lower Manhattan from City View rooms.', 1, 4);
INSERT INTO images(id, title, url, product_id) VALUES (16, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-16.jpg', 4);
INSERT INTO images(id, title, url, product_id) VALUES (17, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-17.jpg', 4);
INSERT INTO images(id, title, url, product_id) VALUES (18, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-18.jpg', 4);
INSERT INTO images(id, title, url, product_id) VALUES (19, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-19.jpg', 4);
INSERT INTO images(id, title, url, product_id) VALUES (20, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-20.jpg', 4);
INSERT INTO images(id, title, url, product_id) VALUES (21, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-21.jpg', 4);

INSERT INTO products(id, name, description, category_id, city_id) VALUES (5, 'Celeste House Perfect for Couples 1 BR APT', 'Allow us to welcome you to the cosiest house in all the area!! Known for its creative international restaurants, colorful street murals, and fruit stands, the Caribbean-style also has a thriving arts scene.', 2, 5);
INSERT INTO images(id, title, url, product_id) VALUES (22, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-22.jpg', 5);
INSERT INTO images(id, title, url, product_id) VALUES (23, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-23.jpg', 5);
INSERT INTO images(id, title, url, product_id) VALUES (24, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-24.jpg', 5);
INSERT INTO images(id, title, url, product_id) VALUES (25, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-25.jpg', 5);
INSERT INTO images(id, title, url, product_id) VALUES (26, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-26.jpg', 5);

INSERT INTO products(id, name, description, category_id, city_id) VALUES (6, 'Bright studio near the quays of the Seine', 'Between Paris and La Défense and a few steps from the banks of the Seine, Residhome Paris Asnières Park is located in the renovated Les Grésillons district. Ideal for business or leisure stays.', 2, 6);
INSERT INTO images(id, title, url, product_id) VALUES (27, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-27.jpg', 6);
INSERT INTO images(id, title, url, product_id) VALUES (28, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-28.jpg', 6);
INSERT INTO images(id, title, url, product_id) VALUES (29, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-29.jpg', 6);
INSERT INTO images(id, title, url, product_id) VALUES (30, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-30.jpg', 6);
INSERT INTO images(id, title, url, product_id) VALUES (31, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-31.jpg', 6);

INSERT INTO products(id, name, description, category_id, city_id) VALUES (7, 'Luxury VIP Bedroom SEA VIEW + Private Bath in Doha', 'Great Location in the Center of Doha at a walking distance from Doha City Center and Beach with a stunning Sea View Room.', 1, 7);
INSERT INTO images(id, title, url, product_id) VALUES (32, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-32.jpg', 7);
INSERT INTO images(id, title, url, product_id) VALUES (33, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-33.jpg', 7);
INSERT INTO images(id, title, url, product_id) VALUES (34, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-34.jpg', 7);
INSERT INTO images(id, title, url, product_id) VALUES (35, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-35.jpg', 7);
INSERT INTO images(id, title, url, product_id) VALUES (36, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-36.jpg', 7);

INSERT INTO products(id, name, description, category_id, city_id) VALUES (8, 'Welcoming comfortable room for one.', 'Comfortable, stylish room located close to fast links into central London. Walking distance from Bakerloo and overground services from Willesden Junction. Bed only.', 4, 8);
INSERT INTO images(id, title, url, product_id) VALUES (37, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-37.jpg', 8);
INSERT INTO images(id, title, url, product_id) VALUES (38, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-38.jpg', 8);
INSERT INTO images(id, title, url, product_id) VALUES (39, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-39.jpg', 8);
INSERT INTO images(id, title, url, product_id) VALUES (40, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-40.jpg', 8);

INSERT INTO products(id, name, description, category_id, city_id) VALUES (9, 'Lemon Spaces At The Nile - 2 BR Apartment', 'This 2-bedroom space is directly overlooking the Nile having panorama windows from both sides where you can see the pyramids from one of them. Natural light goes through all areas of the space.', 2, 9);
INSERT INTO images(id, title, url, product_id) VALUES (41, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-41.jpg', 9);
INSERT INTO images(id, title, url, product_id) VALUES (42, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-42.jpg', 9);
INSERT INTO images(id, title, url, product_id) VALUES (43, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-43.jpg', 9);
INSERT INTO images(id, title, url, product_id) VALUES (44, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-44.jpg', 9);
INSERT INTO images(id, title, url, product_id) VALUES (45, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-45.jpg', 9);

INSERT INTO products(id, name, description, category_id, city_id) VALUES (10, 'Single room - private [Atocha- Sol]', 'Private single room in calle atocha, equipped with full private bathroom, hair dryer, TV , air conditioning, safe suitable for laptops, high speed WIFI, access lock with keypad and card.', 4, 10);
INSERT INTO images(id, title, url, product_id) VALUES (46, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-46.jpg', 10);
INSERT INTO images(id, title, url, product_id) VALUES (47, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-47.jpg', 10);
INSERT INTO images(id, title, url, product_id) VALUES (48, '', 'https://g1bucket-01.s3.amazonaws.com/img/products-48.jpg', 10);

-- INSERT INTO images(id, title, url, product_id) VALUES (, '', '', );
-- INSERT INTO products(id, description, name, category_id, city_id) VALUES (, '', '', , );
