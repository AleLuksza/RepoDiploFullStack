-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: ejercicio
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `tabla_empleados`
--

DROP TABLE IF EXISTS `tabla_empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tabla_empleados` (
  `id_emp` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) DEFAULT NULL,
  `apellido` varchar(60) DEFAULT NULL,
  `trabajo` varchar(60) DEFAULT NULL,
  `edad` int DEFAULT NULL,
  `salario` int DEFAULT NULL,
  `mail` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id_emp`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tabla_empleados`
--

LOCK TABLES `tabla_empleados` WRITE;
/*!40000 ALTER TABLE `tabla_empleados` DISABLE KEYS */;
INSERT INTO `tabla_empleados` VALUES (1,'Juan','Hagan','Programador Senior',32,120000,'juan_hagan@bignet.com'),(2,'Gonzalo','Pillai','Programador Senior',32,110000,'g_pillai@bignet.com'),(3,'Ana','Dharma','Desarollador Web',27,90000,'ana@bignet.com'),(4,'Maria','Anchor','Desarrollador Web',26,85000,'mary@bignet.com'),(5,'Alfred','Fernandez','Programador',31,75000,'af@bignet.com'),(6,'Juan','Agüero','Programador',36,85000,'juan@bignet.com'),(7,'Eduardo','Sacan','Programador',25,85000,'eddi@bignet.com'),(8,'Alejandro','Nanda','Programador',32,70000,'alenanda@bignet.com'),(9,'Hernan','Rosso','Especialista Multimedia',33,90000,'hernan@bignet.com'),(10,'Pablo','Simon','Especialsta Multimedia',43,85000,'ps@bignet.com'),(11,'Arturo','Hernandez','Especialista Multimedia',32,75000,'arturo@bignet.com'),(12,'Jimena','Cazado','Diseñador Web',32,110000,'jimena@bignet.com'),(13,'Roberto','Luis','Administrador de Sistemas',35,100000,'roberto@bignet.com'),(14,'Daniel','Gutierrez','Administrador de Sistemas',34,90000,'daniel@bignet.com'),(15,'Miguel','Harper','Ejecutivo de Ventas Senior',36,120000,'miguel@bignet.com'),(16,'Monica','Sanchez','Ejecutivo de Ventas',30,90000,'monica@bignet.com'),(17,'Alicia','Simlai','Ejecutivo de Ventas',27,70000,'alicia@bignet.com'),(18,'Jose','Iriarte','Ejecutivo de Ventas',27,72000,'jose@bignet.com'),(19,'Sabrina','Allende','Gerente de Soporte Tecnico',32,200000,'sabrina@bignet.com'),(20,'Pedro','Campeon','Gerente de Finanzas',36,220000,'pedro@bignet.com'),(21,'Mariano','Dharma','Presidente',28,300000,'mariano@bignet.com');
/*!40000 ALTER TABLE `tabla_empleados` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-23 19:54:16
