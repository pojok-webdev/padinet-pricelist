-- MySQL dump 10.13  Distrib 5.7.23, for Linux (x86_64)
--
-- Host: localhost    Database: pricelists
-- ------------------------------------------------------
-- Server version	5.7.23-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `branches`
--

DROP TABLE IF EXISTS `branches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `branches` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `createdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branches`
--

LOCK TABLES `branches` WRITE;
/*!40000 ALTER TABLE `branches` DISABLE KEYS */;
INSERT INTO `branches` VALUES (1,'Surabaya','2019-03-13 07:15:38'),(2,'Jakarta','2019-03-13 07:15:44'),(3,'Malang','2019-03-13 07:15:50'),(4,'Bali','2019-03-13 07:15:57');
/*!40000 ALTER TABLE `branches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `createdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Broadband','2019-03-12 01:38:26'),(2,'Dedicated','2019-03-12 01:38:35');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customs`
--

DROP TABLE IF EXISTS `customs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `branch_id` smallint(6) DEFAULT NULL,
  `clientname` varchar(200) DEFAULT NULL,
  `reason` text,
  `clientpic` varchar(200) DEFAULT NULL,
  `clienttlp` varchar(200) DEFAULT NULL,
  `clientpichp` varchar(200) DEFAULT NULL,
  `clientemail` varchar(200) DEFAULT NULL,
  `clientaddress` varchar(200) DEFAULT NULL,
  `activationtarget` date DEFAULT NULL,
  `img` longblob,
  `category_id` smallint(6) DEFAULT NULL,
  `servicename_id` smallint(6) DEFAULT NULL,
  `media_id` smallint(6) DEFAULT NULL,
  `quotation_date` date DEFAULT NULL,
  `customprice` decimal(12,2) DEFAULT NULL,
  `createdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customs`
--

LOCK TABLES `customs` WRITE;
/*!40000 ALTER TABLE `customs` DISABLE KEYS */;
INSERT INTO `customs` VALUES (1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,1,NULL,300000.00,'2019-03-13 02:13:46'),(2,1,'1',NULL,'Badut','453535435','45435435','badut@ulangtahun.com','Jl Pelan-pelan 345','2019-03-23',_binary '-',1,1,1,NULL,300000.00,'2019-03-13 02:59:15'),(3,1,'Wau-wau',NULL,'teong','12124343','5435345435','teong@gmail.com','Jl Kura-kura 222','2019-03-13',_binary '-',1,1,1,NULL,300000.00,'2019-03-13 03:32:23'),(4,1,'Elang Persada',NULL,'Joko Wibowo','031-2224466','0888224466','joko@elang.co.id','Jl Rajawali 543 Surabaya','2019-03-14',_binary '-',1,1,1,NULL,550000.00,'2019-03-13 10:28:52'),(5,1,'Elang Perkasa Motor',NULL,'Muh Huda','099987876','09987899','buhari@gmail.com','Jl Emas Berlian 234 Surabaya','2019-04-15',_binary '-',1,1,1,NULL,450000.00,'2019-03-15 02:55:03'),(6,1,'Lima Menara',NULL,'Arnow Schwar sinaga','031 34321234','0888213232','arnie@gmail.com','Jl Pisang Kremes 234 Surabaya','2019-05-15','',2,3,1,'2019-03-15',350000.00,'2019-03-15 03:01:51');
/*!40000 ALTER TABLE `customs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `groups` (
  `id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(20) CHARACTER SET utf8 NOT NULL,
  `description` varchar(100) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1,'Administrator','Admin'),(2,'Umum dan Warehouse','Umum dan Warehouse'),(3,'Sales','Sales'),(4,'TS','Teknis'),(5,'Accounting','Accounting'),(6,'CRO','Customer Relationship Officer'),(7,'EOS','Engineer On Site');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groups_users`
--

DROP TABLE IF EXISTS `groups_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `groups_users` (
  `user_id` int(11) unsigned NOT NULL,
  `group_id` mediumint(8) unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups_users`
--

LOCK TABLES `groups_users` WRITE;
/*!40000 ALTER TABLE `groups_users` DISABLE KEYS */;
INSERT INTO `groups_users` VALUES (2,4),(4,4),(3,4),(6,2),(7,4),(8,3),(9,3),(11,3),(10,3),(12,3),(17,1),(15,4),(27,4),(20,4),(18,4),(37,4),(13,3),(36,4),(29,5),(32,5),(30,5),(16,4),(40,3),(11,4),(11,1),(11,2),(5,2),(14,3),(19,4),(21,4),(22,4),(23,4),(24,4),(25,4),(26,4),(28,3),(33,3),(34,3),(35,4),(38,4),(39,3),(41,3),(42,3),(45,3),(46,3),(47,3),(48,3),(49,3),(50,3),(17,2),(17,4),(17,5),(17,3),(51,4),(52,3),(10,5),(10,2),(10,4),(10,1),(6,3),(6,4),(53,4),(54,3),(9,4),(55,4),(70,2),(68,4),(69,4),(71,1),(71,4),(71,3),(72,4),(43,4),(65,4),(63,4),(76,4),(77,4),(74,4),(73,4),(75,4),(44,4),(62,3),(78,4),(60,4),(62,4),(79,4),(80,4),(81,4),(82,4),(83,6),(84,6),(85,4),(86,4),(87,4),(88,4),(89,4),(90,4),(93,4),(92,4),(91,4),(94,4),(31,4),(95,3),(96,3),(97,3),(66,4),(56,4),(58,5),(59,5),(57,5),(99,3),(100,3),(101,4),(102,4),(103,4),(104,4),(50,4),(68,3),(105,4),(54,1),(1,7),(9,7),(11,7),(81,7),(72,7),(56,7),(106,4),(107,4),(108,4),(109,4),(98,6),(110,4),(111,4),(19,7),(16,7),(7,7),(112,3),(9,6),(112,4),(113,3),(114,3),(115,4),(116,4),(117,3),(17,7),(17,6),(118,4),(119,4),(120,4),(121,4),(1,4),(122,4),(123,4),(124,4),(125,4),(126,4),(127,4),(128,4),(129,4),(130,4),(131,4),(132,3),(133,3),(88,7),(134,4),(135,4),(136,4),(137,4),(138,4),(139,3),(140,4),(84,3),(83,3),(141,3),(141,4),(142,4),(143,3),(144,3),(145,3),(146,3),(148,3),(147,3),(149,3),(150,3),(151,3),(152,3),(153,3),(70,3),(154,3),(1,3),(1,1),(104,7),(155,4),(156,4),(98,3),(157,4),(158,4),(159,4),(160,3),(161,3),(162,3),(163,3),(164,4),(165,4),(166,4),(166,7),(167,4),(168,4),(35,7),(169,4),(129,7),(170,3),(171,4),(172,4),(173,4),(61,4),(174,3),(139,1);
/*!40000 ALTER TABLE `groups_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medias`
--

DROP TABLE IF EXISTS `medias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medias` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `createdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medias`
--

LOCK TABLES `medias` WRITE;
/*!40000 ALTER TABLE `medias` DISABLE KEYS */;
INSERT INTO `medias` VALUES (1,'wireless','2019-03-12 06:31:30'),(2,'FO','2019-03-12 06:31:35');
/*!40000 ALTER TABLE `medias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pricelists`
--

DROP TABLE IF EXISTS `pricelists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pricelists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` smallint(6) DEFAULT NULL,
  `servicename_id` smallint(6) DEFAULT NULL,
  `media_id` smallint(6) DEFAULT NULL,
  `capacity` varchar(50) DEFAULT NULL,
  `basicprice` decimal(12,2) DEFAULT NULL,
  `normalprice` decimal(12,2) DEFAULT NULL,
  `bottomprice` decimal(12,2) DEFAULT NULL,
  `upperprice` decimal(12,2) DEFAULT NULL,
  `createdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pricelists`
--

LOCK TABLES `pricelists` WRITE;
/*!40000 ALTER TABLE `pricelists` DISABLE KEYS */;
INSERT INTO `pricelists` VALUES (1,2,2,1,'1 Mbps',900000.00,1500000.00,1350000.00,1200000.00,'2019-03-12 01:20:16'),(2,2,2,1,'2 Mbps',1080000.00,1800000.00,1620000.00,1440000.00,'2019-03-12 01:56:58'),(3,2,2,1,'3 Mbps',1560000.00,2600000.00,2340000.00,2080000.00,'2019-03-12 02:28:05'),(4,2,2,1,'4 Mbps',1980000.00,3300000.00,2970000.00,2640000.00,'2019-03-12 02:29:08'),(5,2,2,1,'5 Mbps',2400000.00,4000000.00,3600000.00,3200000.00,'2019-03-12 02:39:49'),(6,2,2,1,'10 Mbps',3840000.00,6400000.00,5760000.00,5120000.00,'2019-03-12 02:41:21'),(7,2,2,1,'15 Mbps',5280000.00,8800000.00,7920000.00,7040000.00,'2019-03-12 02:42:31'),(8,2,2,1,'20 Mbps',6480000.00,10800000.00,9720000.00,8640000.00,'2019-03-12 02:43:39'),(9,2,2,1,'30 Mbps',9120000.00,15200000.00,13680000.00,12160000.00,'2019-03-12 02:44:46'),(10,2,2,2,'5 Mbps',3240000.00,5400000.00,4860000.00,4320000.00,'2019-03-12 02:55:24'),(11,2,2,2,'10 Mbps',5400000.00,9000000.00,8100000.00,7200000.00,'2019-03-12 03:05:10'),(12,2,2,2,'15 Mbps',6240000.00,10400000.00,9360000.00,8320000.00,'2019-03-12 03:06:27'),(13,2,2,2,'20 Mbps',8910000.00,14850000.00,13365000.00,11880000.00,'2019-03-12 03:08:24'),(14,2,2,2,'30 Mbps',12420000.00,20700000.00,18630000.00,16560000.00,'2019-03-12 03:09:43'),(15,2,2,2,'50 Mbps',16080000.00,26800000.00,24120000.00,21440000.00,'2019-03-12 03:11:01'),(16,2,2,2,'100 Mbps',28320000.00,47200000.00,42480000.00,37760000.00,'2019-03-12 03:12:32'),(17,2,3,1,'1 Mb',0.00,NULL,0.00,0.00,'2019-03-12 03:31:52'),(18,2,3,1,'2 Mb',1000000.00,NULL,900000.00,800000.00,'2019-03-12 03:31:53'),(19,2,3,1,'3 Mb',1500000.00,NULL,1350000.00,1200000.00,'2019-03-12 03:31:53'),(20,2,3,1,'4 Mb',2000000.00,NULL,1800000.00,1600000.00,'2019-03-12 03:31:53'),(21,2,3,1,'5 Mb',2500000.00,NULL,2250000.00,2000000.00,'2019-03-12 03:31:53'),(22,2,3,1,'10 Mb',4000000.00,NULL,3600000.00,3200000.00,'2019-03-12 03:31:53'),(23,2,3,1,'15 Mb',5500000.00,NULL,4950000.00,4400000.00,'2019-03-12 03:31:53'),(24,2,3,1,'20 Mb',6500000.00,NULL,5850000.00,5200000.00,'2019-03-12 03:31:53'),(25,2,3,1,'30 Mb',9000000.00,NULL,8100000.00,7200000.00,'2019-03-12 03:31:53'),(26,2,3,2,'5 Mb',3500000.00,NULL,3150000.00,2800000.00,'2019-03-12 03:40:26'),(27,2,3,2,'10 Mb',5500000.00,NULL,4950000.00,4400000.00,'2019-03-12 03:40:26'),(28,2,3,2,'15Mb',7000000.00,NULL,6300000.00,5600000.00,'2019-03-12 03:40:26'),(29,2,3,2,'20 Mb',9000000.00,NULL,8100000.00,7200000.00,'2019-03-12 03:40:26'),(30,2,3,2,'30 Mb',12000000.00,NULL,10800000.00,9600000.00,'2019-03-12 03:40:26'),(31,2,3,2,'50 Mb',13000000.00,NULL,11700000.00,10400000.00,'2019-03-12 03:40:26'),(32,2,3,2,'100 Mb',24000000.00,NULL,21600000.00,19200000.00,'2019-03-12 03:40:26'),(33,2,4,1,'2 Mb',1000000.00,NULL,900000.00,800000.00,'2019-03-12 03:51:20'),(34,2,4,1,'3 Mb',1500000.00,NULL,1350000.00,1200000.00,'2019-03-12 03:51:21'),(35,2,4,1,'4 Mb',2000000.00,NULL,1800000.00,1600000.00,'2019-03-12 03:51:21'),(36,2,4,1,'5 Mb',2500000.00,NULL,2250000.00,2000000.00,'2019-03-12 03:51:21'),(37,2,4,1,'10 Mb',4000000.00,NULL,3600000.00,3200000.00,'2019-03-12 03:51:21'),(38,2,4,1,'15 Mb',5500000.00,NULL,4950000.00,4400000.00,'2019-03-12 03:51:21'),(39,2,4,1,'20 Mb',6500000.00,NULL,5850000.00,5200000.00,'2019-03-12 03:51:21'),(40,2,4,1,'30 Mb',9000000.00,NULL,8100000.00,7200000.00,'2019-03-12 03:51:21'),(41,2,4,2,'5 Mb',3500000.00,NULL,3150000.00,2800000.00,'2019-03-12 04:03:37'),(42,2,4,2,'10 Mb',5500000.00,NULL,4950000.00,4400000.00,'2019-03-12 04:03:38'),(43,2,4,2,'15 Mb',7000000.00,NULL,6300000.00,5600000.00,'2019-03-12 04:03:38'),(44,2,4,2,'20 Mb',9000000.00,NULL,8100000.00,7200000.00,'2019-03-12 04:03:38'),(45,2,4,2,'30 Mb',12000000.00,NULL,10800000.00,9600000.00,'2019-03-12 04:03:38'),(46,2,4,2,'50 Mb',13000000.00,NULL,11700000.00,10400000.00,'2019-03-12 04:03:38'),(47,2,4,2,'100 Mb',24000000.00,NULL,21600000.00,19200000.00,'2019-03-12 04:03:38'),(48,1,1,1,'Up to 3 Mbps',500000.00,0.00,0.00,0.00,'2019-03-12 04:09:02'),(49,1,1,1,'Up to 5 Mbps',750000.00,0.00,0.00,0.00,'2019-03-12 04:09:02'),(50,1,1,1,'Up to 8 Mbps',1000000.00,0.00,0.00,0.00,'2019-03-12 04:09:02'),(51,1,1,1,'Up to 10 Mbps',1250000.00,0.00,0.00,0.00,'2019-03-12 04:09:03');
/*!40000 ALTER TABLE `pricelists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicenames`
--

DROP TABLE IF EXISTS `servicenames`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `servicenames` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `category_id` smallint(6) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `createdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicenames`
--

LOCK TABLES `servicenames` WRITE;
/*!40000 ALTER TABLE `servicenames` DISABLE KEYS */;
INSERT INTO `servicenames` VALUES (1,1,'SBI','2019-03-12 06:29:33'),(2,2,'Enterprise','2019-03-12 06:29:48'),(3,2,'IIX','2019-03-12 06:30:00'),(4,2,'Local Loop','2019-03-12 06:30:11');
/*!40000 ALTER TABLE `servicenames` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `hash` varchar(200) DEFAULT NULL,
  `createdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=177 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'administrator','admin@padi.net.id',NULL,'$2b$10$TKi49cn3FTmhUcLz5wbyzus31qnyA9.DRtqYLjOABMeCPNcx67SN.','2019-03-11 01:58:35'),(2,'iwan','iwan@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(3,'henry','henry@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(4,'arif_','arif_@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(5,'ruri','ruri@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(6,'naning','naning@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(7,'jami','zamroni@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(8,'amir','amir@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(9,'ketut','ketut@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(10,'reinhard','reinhard@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(11,'sisca','sisca@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(12,'dhoni','dhoni@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(13,'dhani','dhani@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(14,'yudi','yudi@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(15,'bagus','bagus@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(16,'yanto','yanto@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(17,'puji','puji@padi.net.id',NULL,'$2b$10$pnFHAUg9Zi.DqgsUKu9Ed.wl1TjYSlnf9.BBYgEyydLiKksm67e8y','2019-03-11 01:58:35'),(18,'Budiyanto','budiyanto@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(19,'Taufik','taufik@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(20,'Didik','didik@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(21,'Aden','aden@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(22,'Kholis','kholis@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(23,'Rega','rega@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(24,'Genta','genta@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(25,'Suhartono','suhartono@padi.net.id_',NULL,NULL,'2019-03-11 01:58:35'),(26,'Catur','catur@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(27,'Bima','bima@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(28,'Anang','anang@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(29,'Miny','miny@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(30,'Yenny','yenny@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(31,'dicki_','dicki@padi.net.ida',NULL,NULL,'2019-03-11 01:58:35'),(32,'Felix','felix@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(33,'Novie','novie@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(34,'Akbar','akbar@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(35,'Hendri','hendri.eka@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(36,'Ikmal','ikmal@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(37,'Danang','danang@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(38,'Vincent','vincent@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(39,'Nelfi','nelfi@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(40,'Thomas','thomas@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(41,'Ferina','ferina@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(42,'Soni','soni@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(43,'Aji','aji@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(44,'Pisa','pisa@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(45,'Solikin','solikin@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(46,'Retno','retno@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(47,'Anjar','anjar@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(48,'Riza','riza@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(49,'putra','saputra@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(50,'Rezy','rezy@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(51,'gilang_','gilang_@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(52,'dwi','dwiwutomo@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(53,'marius','indra@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(54,'ratih','ratih@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(55,'asyhari','asyhari@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(56,'Alif R.Fitrianto','alif@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(57,'Rosa','rosa@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(58,'Hartanti','tanti@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(59,'Bunga','bunga@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(60,'Didin','didin@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(61,'Aditya','aditya@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(62,'Endy','endy@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(63,'Fatih','fatih@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(64,'Imron','imron@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(65,'Gede','gede@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(66,'dicki','dicki@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(67,'Afif','afif@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(68,'Fajar','fajar@padi.net.id_',NULL,NULL,'2019-03-11 01:58:35'),(69,'Ismail','ismail@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(70,'Aya','aya@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(71,'Willis Yudhatama','willis.yudha@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(72,'Tri Yuniardi','tri@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(73,'M Andilas Vianto','andilas@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(74,'Dwi Agus Prasetya','dwiagus@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(75,'Rendy Rizaldy','rendy@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(76,'Alif R.Fitrianto_','alif_@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(77,'Aloysius Elfrizo','aloy@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(78,'Albert','albert@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(79,'Yudianto','yudianto@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(80,'suhartono','suhartono@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(81,'arif','arif@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(82,'gilang','gilang@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(83,'ayu','ayu@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(84,'Eka','eka@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(85,'dicke','dicki@padi.net.id_',NULL,NULL,'2019-03-11 01:58:35'),(86,'yusuf','yusuf@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(87,'erwan','erwan@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(88,'dino','dino@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(89,'anas (magang)','anas@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(90,'rizal (magang)','rizal@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(91,'angga (magang)','angga@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(92,'dhany','dhany@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(93,'riski (magang)','riski@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(94,'gion (magang)','gion@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(95,'andry','andry@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(96,'dhita','dhita@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(97,'Febiyanto','febiyanto@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(98,'lucky','lucky@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(99,'Loida','loida.sirait@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(100,'Nova','nova.roslina@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(101,'fajarh (magang)','fajarh@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(102,'galih (magang)','galih@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(103,'rifza','rifza@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(104,'nurhidayat','nur.hidayat@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(105,'Pinatih','bayu.pinatih@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(106,'Kurniawan','kurniawan.nugroho@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(107,'Al Anshar','anshar@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(108,'I Komang Suryadana','suryadana@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(109,'Muhammad Suhendi','muhamad.suhendi@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(110,'reza','sandy.novareza@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(111,'cahyo','surcahyono@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(112,'sandra','sandra.kumala@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(113,'aris','aristiadi.yuwono@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(114,'hakim','hakim@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(115,'fajar','fajar@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(116,'beni nugraha','beni.nugraha@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(117,'agus pariyadi','agus.pariyadi@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(118,'andika alamsyah','andika@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(119,'moh Husein AF','husein@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(120,'Gala Ringgo Zaky Fawaid (magang)','ringgo@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(121,'Muhammad Yahya (magang)','yahya@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(122,'ikhwan (magang)','ikhwan@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(123,'yuli','yuli.andriantono@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(124,'rizal (magang)','rizal.hanafi@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(125,'agus (magang)','agus@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(126,'agam','agam.nf@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(127,'bariq (magang)','bariq@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(128,'rio (magang)','rio.adi@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(129,'harits','harits@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(130,'dewanta (magang)','dewanta@padi.net.id  ',NULL,NULL,'2019-03-11 01:58:35'),(131,'Pardo','pardo.frans@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(132,'Indra Rajasa','indra.rajasa@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(133,'nyoman suadnyana','nyoman.suadnyana@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(134,'rohmadhoni','tri.rohmadhoni',NULL,NULL,'2019-03-11 01:58:35'),(135,'donyirwanto','dony.irwanto@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(136,'dias sasmita','dias.sasmita@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(137,'ali ichwan','ali.ichwan@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(138,'fajar kurniawan','fajar.kurniawan@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(139,'dhea','dhea@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(140,'aspar djafar','aspar.djafar@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(141,'diana','diana.chandra@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(142,'hendra permana','hendra.permana@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(143,'Dimas Ernanda','dimas.ernanda@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(144,'Illa Dwi Damayanti','illa.dwi@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(145,'Shera Lia Martalisa','shera.lia@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(146,'Wigati Aulia Indriawati','aulia.indri@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(147,'wulan','wulan.sri@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(148,'Reisy','reisy.yusuf@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(149,'Baktiar Sukodono','baktiar.dono@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(150,'Angga Wicaksono','angga.wicaksono@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(151,'Ni Nyoman Putri Adiutami','nyoman.putri@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(154,'erara wulansari','rara@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(155,'Christian Adi Purno','christian.adipurno@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(156,'Masruron','masruron@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(157,'fachrudin Idris','fachruddin.idris@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(158,'yunicko marsha','yunicko.marsa@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(159,'Imron Rosydi','imron.rosydi@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(160,'ganies garnianto','ganies.garnianto@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(161,'ahmad mahendra','ahmad.mahendra@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(162,'diana hindrayani','diana.hindrayani@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(163,'astri ariyanty','astri.ariyanty@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(164,'faishal misbahul munir','faishal.misbahul@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(165,'angga prasetyo','angga.prasetyo@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(166,'Gilang Cipta','gilang.cipta@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(167,'Ibnu RIcal','ibnu.rical@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(168,'Muhammad Feri','feri@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(169,'Rofiul ichsan (magang)','rofiul.ichsan@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(170,'zulkarnaen','zulkarnaen.novpriyansyah@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(171,'Dhini May','dhini.may@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(172,'Irma Yulia','irma.yulia@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(173,'hendra permana (magang)','hendra.p@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(174,'Devi Oktaviani','devi.okta@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(175,'Dinna Rafika','dinna.rafika@padi.net.id',NULL,NULL,'2019-03-11 01:58:35'),(176,'vero','desi.veronika@padi.net.id',NULL,NULL,'2019-03-11 01:58:35');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-18 16:47:19
