create database fstackeletro;
use fstackeletro;
CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `descricao` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `preco` float DEFAULT NULL,
  `preco_venda` float DEFAULT NULL,
  `imagem` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `produtos` (`id`, `categoria`, `descricao`, `preco`, `preco_venda`, `imagem`) 
VALUES (1,'geladeira','Eletrolux 2 Portas Cycle Defrost 260L 217v Branco',1700.89,1444.9,'GeladeiraElectroluxPortasCycleDefrostLvBranco.jpg'),
(2,'geladeira',' Continental Frost Free - Duplex 370L TC41S',2000,1800.49,'ContinentalFrostFreeDuplex370LTC41S.jpg'),
(3,'geladeira',' Continental Frost Free - Duplex 472L TC56',2500,2249.49,'ContinentalFrostFreeDuplexBranco472LTC56.jpg'),
(4,'fogao','  Consul Acendimento Automático - CFO4 NARUNA',800.99,750.89,'Fogao4BocasConsulAcendimentoAutomaticoCFO4NARUNA.jpg'),
(5,'fogao','5 Bocas Consul Acendimento Automático',800.99,750.89,'Fogao5BocasConsulAcendimentoAutomatico.jpg'),
(6,'microondas','Electrolux com Painel Integrado 31L MI41S - 220 Volts',750.11,611.1,'Micro-ondasElectroluxcomPainelIntegrado31LMI41S220Volts.jpg'),
(7,'microondas','Micro-ondas Electrolux MTD30-20L.jpg',2000,1800.49,'Micro-ondasElectroluxMTD30-20L.jpg'),
(8,'microondas','Microondas LGE asy Clean 30 LBranco 220VMS3052RA.jpg',2000,1800.49,'MicroondasLGEasyClean30LBranco220VMS3052RA.jpg'),
(9,'Lavadora de Roupas','  Consul CWB09 ABANA - 9Kg 15 Programas de Lavagem',1900.89,1089.9,'LavadoradeRoupasConsulCWB09ABANA-9Kg15ProgramasdeLavagem.jpg'),
(10,'Lavadora de Roupas','  Electrolux LAC13 - 13Kg 12 Programas de Lavagem',1700.89,1400.9,'LavadoradeRoupasElectroluxLAC13-13Kg12ProgramasdeLavagem.jpg'),
(11,'Lava_louca',' Brastemp Ative! BLF08 AB - 8 Serviços',2077.89,1888.99,'LavaLoucasBrastempAtiveBLF08AB8Servicos.jpg'),
(12,'lava_louca',' Branca 8 Serviços (LV08B) - Electrolux',2500.89,2089.19,'LavaloucaBranca8ServiçosLV08BElectrolux.jpg');


CREATE TABLE `pedidos` (
  `id_pedido` int NOT NULL AUTO_INCREMENT,
  `nome_do_cliente` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `endereco` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `telefone` varchar(11) COLLATE utf8_bin DEFAULT NULL,
  `nome_do_prod` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `valor_unit` float DEFAULT NULL,
  `quantidade` int DEFAULT NULL,
  `valor_total` float DEFAULT NULL,
  PRIMARY KEY (`id_pedido`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
INSERT INTO `pedidos` (`id_pedido`, `nome_do_cliente`, `endereco`, `telefone`, `nome_do_prod`, `valor_unit`, `quantidade`, `valor_total`) 
VALUES (1,'Cristiana Almeida','Av.São João, 500','1198887898','geladeira',1444.9,2,889.8),
(2,'Rose Pereira','Av.Chico Pontes,58','1198887898','microondas',611.1,1,611.1),
(3,'Pedro Henrique','Av.Cruzeiro do Sul,580','1198887898','fogão',750.89,1,750.89);


CREATE TABLE `comentarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(70) COLLATE utf8_bin DEFAULT NULL,
  `msg` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `data` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
INSERT INTO `comentarios` (`id`, `nome`, `msg`, `data`) 
VALUES (1,'Gilda Brito Araujo ','gg','2020-11-13 09:41:04'),
(2,'Gilda Brito Araujo ','teste123','2020-11-17 15:51:01'),
(3,'Gilda Brito Araujo ','teste123','2020-11-17 15:52:26'),
(4,'Gilda Brito Araujo ','teste123','2020-11-17 15:52:50'),
(5,'Gilda Brito Araujo ','teste1234','2020-11-17 15:54:59');


CREATE TABLE `destaques` (
  `id_destaques` int NOT NULL AUTO_INCREMENT,
  `id_categoria` int DEFAULT NULL,
  `prod_destaques` varchar(40) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id_destaques`),
  KEY `id_categoria` (`id_categoria`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
 INSERT INTO `destaques` (`id_destaques`, `id_categoria`, `prod_destaques`)
 VALUES (1,2,'geladeira'),
 (2,4,'fogao'),
 (3,6,'microondas');

SELECT * FROM destaques JOIN produtos ON produtos.id = destaques.id_categoria;

