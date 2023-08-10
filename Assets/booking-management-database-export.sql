-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: booking_management
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.20.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auto_mobile_meta`
--

DROP TABLE IF EXISTS `auto_mobile_meta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auto_mobile_meta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `key` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL,
  `auto_mobile_id` int NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auto_mobile_meta`
--

LOCK TABLES `auto_mobile_meta` WRITE;
/*!40000 ALTER TABLE `auto_mobile_meta` DISABLE KEYS */;
INSERT INTO `auto_mobile_meta` VALUES (1,'image','uploads/auto_mobile_images/1691661103200download.jpg',1,'2023-08-10 09:51:43','2023-08-10 09:51:43'),(2,'gallary_image','[\"uploads/auto_mobile_images/1691661103201download.jpeg\",\"uploads/auto_mobile_images/1691661103201download.jpg\",\"uploads/auto_mobile_images/1691661103201download.png\"]',1,'2023-08-10 09:51:43','2023-08-10 09:51:43');
/*!40000 ALTER TABLE `auto_mobile_meta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auto_mobiles`
--

DROP TABLE IF EXISTS `auto_mobiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auto_mobiles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `auto_mobile_type` varchar(155) NOT NULL COMMENT '1- bike,   2- car, 3- traveller\\n',
  `auto_mobile_name` varchar(155) NOT NULL,
  `auto_mobile_number` varchar(55) NOT NULL,
  `auto_mobile_brand` varchar(55) NOT NULL,
  `user_id` int NOT NULL,
  `rc_number` varchar(55) NOT NULL,
  `seater` int NOT NULL,
  `created_by` int DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_by` int DEFAULT NULL,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `is_deleted` tinyint DEFAULT NULL,
  `cost_per_km` float NOT NULL,
  `deleted_by` int DEFAULT NULL,
  `auto_mobile_categories` varchar(45) DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auto_mobiles`
--

LOCK TABLES `auto_mobiles` WRITE;
/*!40000 ALTER TABLE `auto_mobiles` DISABLE KEYS */;
INSERT INTO `auto_mobiles` VALUES (1,'sedan','CD Delux 125','MP-17-IN-124','Hero Honda',1,'835947dhjsfksg',2,2,'2023-08-10 09:51:43',NULL,'2023-08-10 09:51:43',NULL,200,NULL,'bike',1);
/*!40000 ALTER TABLE `auto_mobiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotels`
--

DROP TABLE IF EXISTS `hotels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `slug` varchar(150) NOT NULL,
  `status` tinyint NOT NULL,
  `user_id` int NOT NULL,
  `created_by` int NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` int DEFAULT NULL,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `is_deleted` int DEFAULT '0',
  `deleted_by` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='\n';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotels`
--

LOCK TABLES `hotels` WRITE;
/*!40000 ALTER TABLE `hotels` DISABLE KEYS */;
INSERT INTO `hotels` VALUES (1,'Hotel  Grande Vijay Nagar Indore','Hotel_Meritel_Grande_Vijay_Nagar_Indore',1,2,2,'2023-08-10 06:37:06',NULL,'2023-08-10 06:37:06',0,NULL),(2,'Hotel  Grande Vijay Nagar Indore2','Hotel_Meritel_Grande_Vijay_Nagar_Indore',1,2,2,'2023-08-10 06:43:43',NULL,'2023-08-10 06:43:43',0,NULL),(3,'Hotel  Grande Vijay Nagar Indore243','Hotel_Meritel_Grande_Vijay_Nagar_Indore',1,2,2,'2023-08-10 06:43:47',NULL,'2023-08-10 06:43:47',0,NULL);
/*!40000 ALTER TABLE `hotels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotels_meta`
--

DROP TABLE IF EXISTS `hotels_meta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotels_meta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `key` varchar(45) NOT NULL,
  `value` longtext NOT NULL,
  `hotel_id` int NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf16;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotels_meta`
--

LOCK TABLES `hotels_meta` WRITE;
/*!40000 ALTER TABLE `hotels_meta` DISABLE KEYS */;
INSERT INTO `hotels_meta` VALUES (1,'short_description','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.',1,'2023-08-10 06:37:06','2023-08-10 06:37:06'),(2,'long_description','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.',1,'2023-08-10 06:37:06','2023-08-10 06:37:06'),(3,'availability','[{\"day\":\"monday\",\"status\":\"true\",\"start_time\":\"9:00:AM\",\"close_time\":\"11:00:PM\",\"date\":\"2000-02-12\"},{\"day\":\"tuesday\",\"status\":\"true\",\"start_time\":\"9:00:AM\",\"close_time\":\"11:00:PM\",\"date\":\"2000-02-12\"}]',1,'2023-08-10 06:37:06','2023-08-10 06:37:06'),(4,'location','{\"latitude\":\"22.719568\",\"longitude\":\"75.857727\"',1,'2023-08-10 06:37:06','2023-08-10 06:37:06'),(5,'city','indore',1,'2023-08-10 06:37:06','2023-08-10 06:37:06'),(6,'image','uploads/hotels_images/16916494263034ul9jwll4se35tdownload.jpeg',1,'2023-08-10 06:37:06','2023-08-10 06:37:06'),(7,'gallary_image','[\"uploads/hotels_images/16916494263044ul9jwll4se35udownload.jpeg\",\"uploads/hotels_images/16916494263044ul9jwll4se35vdownload.jpg\",\"uploads/hotels_images/16916494263044ul9jwll4se35wdownload.png\"]',1,'2023-08-10 06:37:06','2023-08-10 06:37:06'),(8,'booking_type','{\"is_hourly_booking\":true, \"is_day_boking\":true,\"is_monthly_booking\":true}',1,'2023-08-10 06:37:06','2023-08-10 06:37:06'),(9,'cancellation_pilicy','[\"Ani\", \"Sam\", \"Joe\"]',1,'2023-08-10 06:37:06','2023-08-10 06:37:06'),(10,'terms_condition','[\"Ani\", \"Sam\", \"Joe\"]',1,'2023-08-10 06:37:06','2023-08-10 06:37:06'),(11,'short_description','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.',2,'2023-08-10 06:43:43','2023-08-10 06:43:43'),(12,'long_description','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.',2,'2023-08-10 06:43:43','2023-08-10 06:43:43'),(13,'availability','[{\"day\":\"monday\",\"status\":\"true\",\"start_time\":\"9:00:AM\",\"close_time\":\"11:00:PM\",\"date\":\"2000-02-12\"},{\"day\":\"tuesday\",\"status\":\"true\",\"start_time\":\"9:00:AM\",\"close_time\":\"11:00:PM\",\"date\":\"2000-02-12\"}]',2,'2023-08-10 06:43:43','2023-08-10 06:43:43'),(14,'location','{\"latitude\":\"22.719568\",\"longitude\":\"75.857727\"',2,'2023-08-10 06:43:43','2023-08-10 06:43:43'),(15,'city','indore',2,'2023-08-10 06:43:43','2023-08-10 06:43:43'),(16,'image','uploads/hotels_images/16916498233404ula5yll4smlildownload.jpeg',2,'2023-08-10 06:43:43','2023-08-10 06:43:43'),(17,'gallary_image','[\"uploads/hotels_images/16916498233414ula5yll4smlimdownload.jpeg\",\"uploads/hotels_images/16916498233414ula5yll4smlindownload.jpg\",\"uploads/hotels_images/16916498233414ula5yll4smliodownload.png\"]',2,'2023-08-10 06:43:43','2023-08-10 06:43:43'),(18,'booking_type','{\"is_hourly_booking\":true, \"is_day_boking\":true,\"is_monthly_booking\":true}',2,'2023-08-10 06:43:43','2023-08-10 06:43:43'),(19,'cancellation_pilicy','[\"Ani\", \"Sam\", \"Joe\"]',2,'2023-08-10 06:43:43','2023-08-10 06:43:43'),(20,'terms_condition','[\"Ani\", \"Sam\", \"Joe\"]',2,'2023-08-10 06:43:43','2023-08-10 06:43:43'),(21,'short_description','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.',3,'2023-08-10 06:43:47','2023-08-10 06:43:47'),(22,'long_description','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.',3,'2023-08-10 06:43:47','2023-08-10 06:43:47'),(23,'availability','[{\"day\":\"monday\",\"status\":\"true\",\"start_time\":\"9:00:AM\",\"close_time\":\"11:00:PM\",\"date\":\"2000-02-12\"},{\"day\":\"tuesday\",\"status\":\"true\",\"start_time\":\"9:00:AM\",\"close_time\":\"11:00:PM\",\"date\":\"2000-02-12\"}]',3,'2023-08-10 06:43:47','2023-08-10 06:43:47'),(24,'location','{\"latitude\":\"22.719568\",\"longitude\":\"75.857727\"',3,'2023-08-10 06:43:47','2023-08-10 06:43:47'),(25,'city','indore',3,'2023-08-10 06:43:47','2023-08-10 06:43:47'),(26,'image','uploads/hotels_images/16916498272004ula5yll4smohsdownload.jpeg',3,'2023-08-10 06:43:47','2023-08-10 06:43:47'),(27,'gallary_image','[\"uploads/hotels_images/16916498272024ula5yll4smohudownload.jpeg\",\"uploads/hotels_images/16916498272024ula5yll4smohvdownload.jpg\",\"uploads/hotels_images/16916498272034ula5yll4smohwdownload.png\"]',3,'2023-08-10 06:43:47','2023-08-10 06:43:47'),(28,'booking_type','{\"is_hourly_booking\":true, \"is_day_boking\":true,\"is_monthly_booking\":true}',3,'2023-08-10 06:43:47','2023-08-10 06:43:47'),(29,'cancellation_pilicy','[\"Ani\", \"Sam\", \"Joe\"]',3,'2023-08-10 06:43:47','2023-08-10 06:43:47'),(30,'terms_condition','[\"Ani\", \"Sam\", \"Joe\"]',3,'2023-08-10 06:43:47','2023-08-10 06:43:47');
/*!40000 ALTER TABLE `hotels_meta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotels_rooms`
--

DROP TABLE IF EXISTS `hotels_rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotels_rooms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(155) DEFAULT NULL,
  `room_number` int DEFAULT NULL,
  `description` longtext,
  `image` varchar(255) DEFAULT NULL,
  `gallary_image` longtext,
  `guest_capacity` int DEFAULT NULL,
  `room_type` varchar(45) DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  `cost_per_day` float DEFAULT NULL,
  `cost_per_hour` float DEFAULT NULL,
  `hotel_id` int DEFAULT NULL,
  `room_size` varchar(45) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_by` int DEFAULT NULL,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotels_rooms`
--

LOCK TABLES `hotels_rooms` WRITE;
/*!40000 ALTER TABLE `hotels_rooms` DISABLE KEYS */;
INSERT INTO `hotels_rooms` VALUES (1,'Premium Room12',201,'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.',NULL,NULL,2,'single',1,200,200,1,'301 sq.ft',2,'2023-08-10 07:46:46',NULL,'2023-08-10 07:46:46'),(2,'Premium Room12234',201,'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.','uploads/room_images/16916536935944ulc9cll4uxjtmdownload.jpg','[\"uploads/room_images/16916536935944ulc9cll4uxjtndownload.jpeg\",\"uploads/room_images/16916536935944ulc9cll4uxjtodownload.jpg\",\"uploads/room_images/16916536935944ulc9cll4uxjtpdownload.png\"]',2,'single',1,200,200,1,'301 sq.ft',2,'2023-08-10 07:48:13',NULL,'2023-08-10 07:48:13');
/*!40000 ALTER TABLE `hotels_rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `order_type` varchar(45) NOT NULL,
  `object_id` int NOT NULL COMMENT 'object id room id, space id , automobile id',
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,2,'hotel_order',1,'2023-08-09 12:58:06','2023-08-09 12:58:06'),(2,3,'space_order',1,'2023-08-09 13:38:41','2023-08-09 13:38:41');
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items_meta`
--

DROP TABLE IF EXISTS `order_items_meta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items_meta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_item_id` int DEFAULT NULL,
  `key` varchar(45) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items_meta`
--

LOCK TABLES `order_items_meta` WRITE;
/*!40000 ALTER TABLE `order_items_meta` DISABLE KEYS */;
INSERT INTO `order_items_meta` VALUES (1,1,'user_details','Shubham Bhai jaiswal','2023-08-09 12:58:06','2023-08-09 12:58:06'),(2,1,'guest_details','[{\"name\":\"shubham kumar jaiswal\",\"date_of_birth\":\"199-02-11\",\"gender\":\"male\"},{\"name\":\"shubham kumar jaiswal\",\"date_of_birth\":\"199-02-11\",\"gender\":\"male\"}]','2023-08-09 12:58:06','2023-08-09 12:58:06'),(3,1,'room_details','{\"room_name\":\"room1\",\"room_size\":null}','2023-08-09 12:58:06','2023-08-09 12:58:06'),(4,1,'hotel_details','{\"hotel_name\":\"dsjfkhgk\"}','2023-08-09 12:58:06','2023-08-09 12:58:06'),(5,2,'user_details','Shubham Bhai jaiswal','2023-08-09 13:38:41','2023-08-09 13:38:41'),(6,2,'total_persons','50','2023-08-09 13:38:41','2023-08-09 13:38:41'),(7,2,'space_details','{\"space_name\":\"hii\",\"space_size\":\"121 sq ft\"}','2023-08-09 13:38:41','2023-08-09 13:38:41');
/*!40000 ALTER TABLE `order_items_meta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_meta`
--

DROP TABLE IF EXISTS `order_meta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_meta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `key` varchar(55) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_meta`
--

LOCK TABLES `order_meta` WRITE;
/*!40000 ALTER TABLE `order_meta` DISABLE KEYS */;
INSERT INTO `order_meta` VALUES (1,2,'user_id','1','2023-08-09 12:58:06','2023-08-09 12:58:06'),(2,2,'hotel_id','1','2023-08-09 12:58:06','2023-08-09 12:58:06'),(3,2,'room_id','1','2023-08-09 12:58:06','2023-08-09 12:58:06'),(4,2,'transaction_id','1','2023-08-09 12:58:06','2023-08-09 12:58:06'),(5,2,'check_in_datetime','2023-08-07 11:22:04','2023-08-09 12:58:06','2023-08-09 12:58:06'),(6,2,'check_out_datetime','2023-08-07 11:22:04','2023-08-09 12:58:06','2023-08-09 12:58:06'),(7,3,'user_id','1','2023-08-09 13:38:41','2023-08-09 13:38:41'),(8,3,'space_id','1','2023-08-09 13:38:41','2023-08-09 13:38:41'),(9,3,'transaction_id','1','2023-08-09 13:38:41','2023-08-09 13:38:41'),(10,3,'check_in_datetime','2023-08-09 10:21:42','2023-08-09 13:38:41','2023-08-09 13:38:41'),(11,3,'check_out_datetime','2023-08-09 10:21:42','2023-08-09 13:38:41','2023-08-09 13:38:41');
/*!40000 ALTER TABLE `order_meta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` varchar(50) NOT NULL COMMENT 'auto_generated_id\\n#dkjsghfsdkj567878789\\n',
  `status` tinyint NOT NULL DEFAULT '0',
  `order_type` varchar(50) NOT NULL COMMENT 'hotel, space, auto mobile',
  `amount` float NOT NULL,
  `datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `unique_transaction_id` varchar(245) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_by` int DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (2,'#16915858867814ulkfkll3qk7r2',1,'hotel_order',200,'2023-08-09 12:58:06','Trx-123456789',NULL,'2023-08-09 12:58:06',NULL,'2023-08-09 12:58:06'),(3,'#16915883214244ulmttll3s0ec1',1,'space_order',200,'2023-08-09 13:38:41','Trx-123456789YYYYY',NULL,'2023-08-09 13:38:41',NULL,'2023-08-09 13:38:41');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='1- admin\n2- customer\n3- driver\n4- hotel owner\n5- space honour\n6 - automobile honour\n';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin','2023-08-02 11:50:45','2023-08-03 05:07:30'),(2,'customer','2023-08-02 12:19:56','2023-08-02 12:30:47'),(3,'driver','2023-08-03 05:04:23','2023-08-03 05:04:23');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `site_options`
--

DROP TABLE IF EXISTS `site_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site_options` (
  `id` int NOT NULL AUTO_INCREMENT,
  `key` varchar(45) NOT NULL,
  `value` varchar(55) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `site_options`
--

LOCK TABLES `site_options` WRITE;
/*!40000 ALTER TABLE `site_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `site_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `space_meta`
--

DROP TABLE IF EXISTS `space_meta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `space_meta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `key` varchar(55) NOT NULL,
  `value` longtext NOT NULL,
  `space_id` int NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `space_meta`
--

LOCK TABLES `space_meta` WRITE;
/*!40000 ALTER TABLE `space_meta` DISABLE KEYS */;
INSERT INTO `space_meta` VALUES (1,'space_type','Premium',1,'2023-08-10 08:58:15','2023-08-10 08:58:15'),(2,'short_description','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.',1,'2023-08-10 08:58:15','2023-08-10 08:58:15'),(3,'long_description','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.',1,'2023-08-10 08:58:15','2023-08-10 08:58:15'),(4,'avalability','[{\"day\":\"monday\",\"status\":\"true\",\"start_time\":\"9:00:AM\",\"close_time\":\"11:00:PM\",\"date\":\"2000-02-12\"},{\"day\":\"tuesday\",\"status\":\"true\",\"start_time\":\"9:00:AM\",\"close_time\":\"11:00:PM\",\"date\":\"2000-02-12\"}]',1,'2023-08-10 08:58:15','2023-08-10 08:58:15'),(5,'image','',1,'2023-08-10 08:58:15','2023-08-10 08:58:15'),(6,'gallary_image','',1,'2023-08-10 08:58:15','2023-08-10 08:58:15'),(7,'location','{\"latitude\":\"22.719568\",\"longitude\":\"75.857727\"',1,'2023-08-10 08:58:15','2023-08-10 08:58:15'),(8,'city','Indore',1,'2023-08-10 08:58:15','2023-08-10 08:58:15'),(9,'booking_type','{\"is_hourly_booking\":true, \"is_day_boking\":true,\"is_monthly_booking\":true}',1,'2023-08-10 08:58:15','2023-08-10 08:58:15'),(10,'cancellation_pilicy','[\"Ani\", \"Sam\", \"Joe\"]',1,'2023-08-10 08:58:15','2023-08-10 08:58:15'),(11,'terms_condition','[\"Ani\", \"Sam\", \"Joe\"]',1,'2023-08-10 08:58:15','2023-08-10 08:58:15'),(12,'space_type','Premium',2,'2023-08-10 08:59:19','2023-08-10 08:59:19'),(13,'short_description','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.',2,'2023-08-10 08:59:19','2023-08-10 08:59:19'),(14,'long_description','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.',2,'2023-08-10 08:59:19','2023-08-10 08:59:19'),(15,'avalability','[{\"day\":\"monday\",\"status\":\"true\",\"start_time\":\"9:00:AM\",\"close_time\":\"11:00:PM\",\"date\":\"2000-02-12\"},{\"day\":\"tuesday\",\"status\":\"true\",\"start_time\":\"9:00:AM\",\"close_time\":\"11:00:PM\",\"date\":\"2000-02-12\"}]',2,'2023-08-10 08:59:19','2023-08-10 08:59:19'),(16,'location','{\"latitude\":\"22.719568\",\"longitude\":\"75.857727\"',2,'2023-08-10 08:59:19','2023-08-10 08:59:19'),(17,'city','Indore',2,'2023-08-10 08:59:19','2023-08-10 08:59:19'),(18,'booking_type','{\"is_hourly_booking\":true, \"is_day_boking\":true,\"is_monthly_booking\":true}',2,'2023-08-10 08:59:19','2023-08-10 08:59:19'),(19,'cancellation_pilicy','[\"Ani\", \"Sam\", \"Joe\"]',2,'2023-08-10 08:59:19','2023-08-10 08:59:19'),(20,'terms_condition','[\"Ani\", \"Sam\", \"Joe\"]',2,'2023-08-10 08:59:19','2023-08-10 08:59:19'),(21,'space_type','Premium',3,'2023-08-10 09:02:23','2023-08-10 09:02:23'),(22,'short_description','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.',3,'2023-08-10 09:02:23','2023-08-10 09:02:23'),(23,'long_description','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.',3,'2023-08-10 09:02:23','2023-08-10 09:02:23'),(24,'avalability','[{\"day\":\"monday\",\"status\":\"true\",\"start_time\":\"9:00:AM\",\"close_time\":\"11:00:PM\",\"date\":\"2000-02-12\"},{\"day\":\"tuesday\",\"status\":\"true\",\"start_time\":\"9:00:AM\",\"close_time\":\"11:00:PM\",\"date\":\"2000-02-12\"}]',3,'2023-08-10 09:02:23','2023-08-10 09:02:23'),(25,'location','{\"latitude\":\"22.719568\",\"longitude\":\"75.857727\"',3,'2023-08-10 09:02:23','2023-08-10 09:02:23'),(26,'city','Indore',3,'2023-08-10 09:02:23','2023-08-10 09:02:23'),(27,'booking_type','{\"is_hourly_booking\":true, \"is_day_boking\":true,\"is_monthly_booking\":true}',3,'2023-08-10 09:02:23','2023-08-10 09:02:23'),(28,'cancellation_pilicy','[\"Ani\", \"Sam\", \"Joe\"]',3,'2023-08-10 09:02:23','2023-08-10 09:02:23'),(29,'terms_condition','[\"Ani\", \"Sam\", \"Joe\"]',3,'2023-08-10 09:02:23','2023-08-10 09:02:23'),(30,'image','uploads/space_images/16916584983164ulgo4ll4xsj65download.jpg',4,'2023-08-10 09:08:18','2023-08-10 09:08:18'),(31,'gallary_image','[\"uploads/space_images/16916584983164ulgo4ll4xsj66download.jpeg\",\"uploads/space_images/16916584983174ulgo4ll4xsj67download.jpg\",\"uploads/space_images/16916584983194ulgo4ll4xsj68download.png\"]',4,'2023-08-10 09:08:18','2023-08-10 09:08:18'),(32,'space_type','Premium',4,'2023-08-10 09:08:18','2023-08-10 09:08:18'),(33,'short_description','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.',4,'2023-08-10 09:08:18','2023-08-10 09:08:18'),(34,'long_description','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.',4,'2023-08-10 09:08:18','2023-08-10 09:08:18'),(35,'avalability','[{\"day\":\"monday\",\"status\":\"true\",\"start_time\":\"9:00:AM\",\"close_time\":\"11:00:PM\",\"date\":\"2000-02-12\"},{\"day\":\"tuesday\",\"status\":\"true\",\"start_time\":\"9:00:AM\",\"close_time\":\"11:00:PM\",\"date\":\"2000-02-12\"}]',4,'2023-08-10 09:08:18','2023-08-10 09:08:18'),(36,'location','{\"latitude\":\"22.719568\",\"longitude\":\"75.857727\"',4,'2023-08-10 09:08:18','2023-08-10 09:08:18'),(37,'city','Indore',4,'2023-08-10 09:08:18','2023-08-10 09:08:18'),(38,'booking_type','{\"is_hourly_booking\":true, \"is_day_boking\":true,\"is_monthly_booking\":true}',4,'2023-08-10 09:08:18','2023-08-10 09:08:18'),(39,'cancellation_pilicy','[\"Ani\", \"Sam\", \"Joe\"]',4,'2023-08-10 09:08:18','2023-08-10 09:08:18'),(40,'terms_condition','[\"Ani\", \"Sam\", \"Joe\"]',4,'2023-08-10 09:08:18','2023-08-10 09:08:18');
/*!40000 ALTER TABLE `space_meta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spaces`
--

DROP TABLE IF EXISTS `spaces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spaces` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(155) NOT NULL,
  `slug` varchar(155) NOT NULL,
  `status` tinyint NOT NULL COMMENT '1 - available 0 - unavailable\n',
  `space_size` varchar(155) DEFAULT NULL,
  `guest_capacity` int NOT NULL,
  `user_id` int NOT NULL,
  `created_by` int NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_by` int DEFAULT NULL,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `is_deleted` int DEFAULT '0',
  `deleted_by` int DEFAULT NULL,
  `cost_per_hour` int DEFAULT NULL,
  `cost_per_day` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='there are 3 types of bookings : 1. is hourly booking 2. is day  booking 3. is monthly booking\ncategories and amenities are managed by spaces_meta table\n\n';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spaces`
--

LOCK TABLES `spaces` WRITE;
/*!40000 ALTER TABLE `spaces` DISABLE KEYS */;
INSERT INTO `spaces` VALUES (1,'Banquete Hall','Banquete_Hall',1,'121 sq ft',20,2,2,'2023-08-10 08:58:15',NULL,'2023-08-10 08:58:15',0,NULL,100,200),(2,'Banquete Hall1','Banquete_Hall',1,'121 sq ft',20,2,2,'2023-08-10 08:59:19',NULL,'2023-08-10 08:59:19',0,NULL,100,200),(3,'Banquete Hall12','Banquete_Hall',1,'121 sq ft',20,2,2,'2023-08-10 09:02:23',NULL,'2023-08-10 09:02:23',0,NULL,100,200),(4,'Banquete Hall123','Banquete_Hall',1,'121 sq ft',20,2,2,'2023-08-10 09:08:18',NULL,'2023-08-10 09:08:18',0,NULL,100,200);
/*!40000 ALTER TABLE `spaces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `amount` float NOT NULL,
  `datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `txn_id` varchar(245) DEFAULT NULL,
  `payment_method` varchar(45) DEFAULT NULL,
  `RCT_number` varchar(45) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `order_id_UNIQUE` (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (1,1,200,'2023-08-08 08:51:51','bvgfhngfhnjgf','stripe',NULL,2,'2023-08-08 08:51:51','2023-08-08 08:51:51'),(2,2,200,'2023-08-08 08:53:37','bvgfhngfhnjgf','stripe',NULL,2,'2023-08-08 08:53:37','2023-08-08 08:53:37');
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_identifier_details`
--

DROP TABLE IF EXISTS `type_identifier_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_identifier_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_identifier_id` int DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `slug` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='type_identifier_details store  amenities name , categories name  related to hotels and spaces AND automobile categories name';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_identifier_details`
--

LOCK TABLES `type_identifier_details` WRITE;
/*!40000 ALTER TABLE `type_identifier_details` DISABLE KEYS */;
INSERT INTO `type_identifier_details` VALUES (1,5,'car','car','2023-08-07 11:22:04','2023-08-07 12:23:29'),(2,5,'bile','bike','2023-08-07 11:26:42','2023-08-07 11:26:42'),(3,5,'traveller','traveller','2023-08-07 11:27:06','2023-08-07 11:27:06'),(4,1,'Boutique hotel','boutique_hotel','2023-08-07 11:49:27','2023-08-07 11:49:27'),(5,1,'Apartment hotel','apartment_hotel','2023-08-07 11:51:08','2023-08-07 11:51:08'),(6,1,'Resort hotel','Resort_hotel','2023-08-07 11:52:09','2023-08-07 11:52:09'),(7,1,'Capsule hotel','Capsule_hotel','2023-08-07 11:52:33','2023-08-07 11:52:33'),(8,1,'Casino hotels','Casino_hotels','2023-08-07 11:53:06','2023-08-07 11:53:06'),(9,1,'Love hotel','Love_hotel','2023-08-07 11:53:38','2023-08-07 11:53:38'),(10,2,'WiFi','Wi_Fi','2023-08-07 11:55:36','2023-08-07 11:55:36'),(11,2,'spa','spa','2023-08-07 11:55:48','2023-08-07 11:55:48'),(12,2,'Body massage','Body_massage','2023-08-07 11:56:48','2023-08-07 11:56:48'),(13,2,'Swimming pool','Swimming_pool','2023-08-07 11:57:56','2023-08-07 11:57:56'),(14,2,'Fitness center','Fitness_center','2023-08-07 11:58:22','2023-08-07 11:58:22'),(15,3,'Meeting hall','Meeting_hall','2023-08-07 12:01:53','2023-08-07 12:39:17'),(16,3,'Conffrence hall','Conffrence_hall','2023-08-07 12:03:08','2023-08-07 12:03:08'),(17,4,'wifi','wifi','2023-08-07 12:04:10','2023-08-07 12:04:10'),(18,4,'Projector','Projector','2023-08-07 12:04:27','2023-08-07 12:04:27');
/*!40000 ALTER TABLE `type_identifier_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_identifier_relations`
--

DROP TABLE IF EXISTS `type_identifier_relations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_identifier_relations` (
  `id` int NOT NULL,
  `object_id` int NOT NULL COMMENT 'object id means hotels_id, space_id, automobiles_id\n',
  `type_identifier_details_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_identifier_relations`
--

LOCK TABLES `type_identifier_relations` WRITE;
/*!40000 ALTER TABLE `type_identifier_relations` DISABLE KEYS */;
/*!40000 ALTER TABLE `type_identifier_relations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_identifiers`
--

DROP TABLE IF EXISTS `type_identifiers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_identifiers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL,
  `slug` varchar(45) NOT NULL,
  `entity` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='type_identifier describe  :   hotel_categories, hotel_amenities, space_amenities, space_categories, automobile_categories \nand other what you want to add\n';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_identifiers`
--

LOCK TABLES `type_identifiers` WRITE;
/*!40000 ALTER TABLE `type_identifiers` DISABLE KEYS */;
INSERT INTO `type_identifiers` VALUES (1,'hotel_categories','hotel_categories','hotel','2023-08-07 11:08:50','2023-08-07 11:08:50'),(2,'hotel_amenities','hotel_amenities','hotel','2023-08-07 11:10:34','2023-08-07 11:10:34'),(3,'space_categories','space_categories','space','2023-08-07 11:13:33','2023-08-07 11:13:33'),(4,'space_amenities','space_amenities','space','2023-08-07 11:14:24','2023-08-07 11:14:24'),(5,'automobile_categories','automobile_categories','automobile','2023-08-07 11:15:18','2023-08-07 11:15:18');
/*!40000 ALTER TABLE `type_identifiers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone_number` bigint DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `created_by` int NOT NULL DEFAULT '0',
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_by` int DEFAULT '0',
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `is_deleted` tinyint DEFAULT '0',
  `role_id` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Shubham Bhai','jaiswal','sj2585097@gmail.com',9131649079,'$2b$10$eGIAZ4Tmi35uoY3wCX0wtOgdb2vs1sv4jvs3IEvvcUOqzEkA0.d/O','1999-11-02',0,'2023-08-02 12:44:52',0,'2023-08-02 12:44:52',0,1),(2,'Shubham Bhai','jaiswal','sj8464736@gmail.com',9131649079,'$2b$10$7sK2FypKMH/4kJHVLU5KoegGioz2l35qf/nURhX5OzOki6Fzjcd66','1999-11-02',0,'2023-08-02 12:45:08',0,'2023-08-03 05:48:51',1,2),(3,'raju name','bhai name','raju@123.com',9131649079,'$2b$10$3m0Eayue/Sqptpd367x6xu3yIvq95gAOyVTPxYKc4ghDOyKTjns.q','2000-01-12',0,'2023-08-03 05:11:01',0,'2023-08-03 06:11:54',1,2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_meta`
--

DROP TABLE IF EXISTS `users_meta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_meta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `key` varchar(45) NOT NULL,
  `value` varchar(255) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_meta`
--

LOCK TABLES `users_meta` WRITE;
/*!40000 ALTER TABLE `users_meta` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_meta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-10 16:25:44
