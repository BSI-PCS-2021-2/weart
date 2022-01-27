-- --------------------------------------------------------
-- Servidor:                     localhost
-- Versão do servidor:           8.0.27 - MySQL Community Server - GPL
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Copiando dados para a tabela base1.avalia: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `avalia` DISABLE KEYS */;
INSERT INTO `avalia` (`id`, `numServiço`, `avaliaçao`, `nota`) VALUES
	(1, 2, 'gostei bastante', 1),
	(2, 3, 'mar o menos', 3),
	(3, 6, 'até que tá ok', 4),
	(4, NULL, 'teste', 3.5),
	(5, NULL, 'sd', 4),
	(6, 5, 'mt bom', 4);
/*!40000 ALTER TABLE `avalia` ENABLE KEYS */;

-- Copiando dados para a tabela base1.cliente: ~36 rows (aproximadamente)
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` (`clienteid`, `idade`, `email`, `nome`, `infoCartão`, `endereçoCompra`, `telefone`, `senha`) VALUES
	(4, 20, 'kevin@goioler', 'kebin', 'd5sa5da5sd', 'rua tal', '5555-8888', 'dasdasdasdasdasda'),
	(5, 18, 'jio@gmail.com', 'asdasdasd', 'asdasdasdasd', 'sadasdasd', '5555-9999', 'sadasdasdasdasdasda'),
	(6, 28, 'jeaaa@geasd', 'santi', '544555', 'rua eeeees', '8888-8888', 'sadsadasdasdasasdas'),
	(7, 123, 'arutrrsd@d', 'artur', '12312312', '123231', '123123123', '123123wqsedwqsdad'),
	(8, 74, 'sadasda@geeeer', 'sasasa', '5e5qw5e5q', 'saddad ', '8888-4444', 'sadsdasdsasdasdasdw3qweqe'),
	(9, NULL, 'beee@gmail.co,', 'aasssss', '123213123123', 'sadsadsadasd', '8888-4147', 'sadldasldasldlasdladsldas'),
	(11, 79897987, 'noreply@localhost', 'Kevin jjjjjjjj', '/79/789674878', 'Rua Cimbres', '21983937640', '.65685'),
	(12, 21, 'kevincrystianbr@gmail.com', 'wqeqwe', 'sasdasdsad', 'asdasdasd', 'sadasdasD', 'levin13'),
	(14, 21, 'dsasad@asd', 'Kevin Crystian2', 'asdad', 'Rua Cimbres', '21983937640', 'asdad'),
	(17, 21, 'sadasdsadsd@dsadasd', 'Kevin Crystianqw', 'saddsad', 'Rua Cimbres', '21983937640', 'asdwadawdw'),
	(18, 21, 'dsasad@asd', 'Kevin Crystianawe', 'sdasddassd', 'Rua Cimbres', '21983937640', 'asdawdwaads'),
	(19, 1, 'ke@gmail', 'sadasdasd', 'adsadda', 'asdsadsad', 'asdadssd', 'dqwdqwdqd'),
	(21, 1, 'asdsad@s', 'asdad', 'asdsad', 'xzcc', 'xzcxcz', 'xczczxc'),
	(22, 1, 'sadasdsadsd@dsadasd', 's', 'asdad', 's', 's', 'asdad'),
	(23, 1, 'sadasdsadsd@dsadasd', 'dsadas', 'asdsadsad', 'asdsd', 'asdsadsa', 'asddasd'),
	(28, 1, 'awewe@dsads', 'ewa', '123', 'sadasdasd', 'asdadsad', '123123'),
	(30, 12, 'noreply@localhost', 'Kevi2312', 'sadsad', 'Rua Cimbres', '21983937640', 'sadsd'),
	(31, 12, 'sadasdsadsd@dsadasd', 'Kevinstian', '5445454', 'Rua Cimbres', '21983937640', '21136233223'),
	(32, 12, 'wqeqwe@sadasd', 'weqewqwe', 'sadasd', 'asdasd', 'asdasd', 'asdasd'),
	(34, 21, 'dsasad@asd', 'Kevin213', 'asdsdasdsad', 'Rua Cimbres', '21983937640', 'asdasdasdads'),
	(53, 12, 'sdasdsa@asda', 'Kevin Crystian', 'saddasdasd', 'Rua Cimbres', '21983937640', 'sadadsasd'),
	(83, 21, 'jorgearts@gmail.com', 'jorgearts', '22123131231', 'Rua Cimbres', '21983937640', 'sadasdsadsdadsa'),
	(84, 25, 'claudinhodasarte@gmail.com', 'volth231', '123131231', 'rua das tulipaz', '21934322222', '213123123123132'),
	(85, 26, 'arturmilgrau@gmail.com', 'artuzin', '1231231233', 'rua uruacua', '9656334535', 'e1sdad1xc1'),
	(86, 123, 'marta@gmai.com', 'marta2333', '31231313', 'lsa', 'sadasdasD', 'asdadasdads'),
	(87, 21, 'contato.navigate@gmail.com', 'Kevincrys', 'sdadsasdad', 'Rua Cimbres', '21983937640', 'asdasdasddasa'),
	(88, 21, 'asdasdasd@sadasdasd', 'santh', 'dsasd', 'asdasd', 'asdasdasd', 'asdasdasdasddasd'),
	(89, 11, 'wqeq@dsadsad', 'Kevin Crystian', 'wqeqewqwe', 'Rua Cimbres', '21983937640', 'qweqweqeeqewq'),
	(91, 22, 'jorgew131@gmail.com', 'jorgew131', '55955asd5ad5asd', 'Rua Cimbres', '21983937640', 'asadsadads'),
	(92, 55, 'luidsww@gmail.com', 'luidsww', 'sadasdasd', 'rua 2', '2696969969', '3123213213'),
	(93, 22, 'asdasdasd@sadasdasd', 'Kevin Crystian', 'ssadasd', 'Rua Cimbres', '21983937640', 'ií0-p0p9'),
	(94, 23, 'safdasdsadasdasdasd@edu.unirio.br', 'tse', 'adsdasddadasd', 'Rua Cimbres, 77', '21983937640', 'c3ec3c'),
	(95, 23, 'kew@edu.unirio.br', 'Kevin Crystian', 'weadsadasddsa', 'Rua Cimbres, 77', '21983937640', 'awsddasd'),
	(96, 23, 'kew@edu.unirio.br', 'Kevin Crystian', 'weadsadasddsa', 'Rua Cimbres, 77', '21983937640', 'awsddasd'),
	(97, 23, 'kew@edu.unirio.br', 'Kevin Crystian', 'weadsadasddsa', 'Rua Cimbres, 77', '21983937640', 'awsddasd'),
	(98, 23, 'kew@edu.unirio.br', 'Kevin Crystian', 'weadsadasddsa', 'Rua Cimbres, 77', '21983937640', 'awsddasd'),
	(99, 21, 'k@edu.unirio.br', 'Kevin Crystian', 'oooo', 'Rua Cimbres, 77', '21983937640', '123'),
	(100, 2223, 'kei.c.coa@edu.unirio.br', 'Kevin Crystian', 'ssadasd', 'Rua Cimbres, 77', '21983937640', '1254123'),
	(101, 2223, 'kei.c.coa@edu.unirio.br', 'Kevin Crystian', 'ssadasd', 'Rua Cimbres, 77', '21983937640', 'sadasdwad'),
	(102, 2223, 'kei.c.coa@edu.unirio.br', 'Kevin Crystian', 'ssadasd', 'Rua Cimbres, 77', '21983937640', 'sadasdwad'),
	(103, 12, 'kevi.c.csa@edu.unirio.br', 'Kevin Crystian', 'sadsd', 'Rua Cimbres, 77', '21983937640', 'wd 21ex12x2'),
	(104, 34, 'kevin.c.costa@edu.unirio.br', 'Kevin Crystian', 'asdasd', 'Rua Cimbres, 77', '21983937640', 'sadasdxawsd');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;

-- Copiando dados para a tabela base1.cliente_profissional: ~11 rows (aproximadamente)
/*!40000 ALTER TABLE `cliente_profissional` DISABLE KEYS */;
INSERT INTO `cliente_profissional` (`clienteid`, `profid`, `tipoArte`, `infoBancarias`, `nomeArtistico`) VALUES
	(83, 1, 'neoclassica', 'bradesco conta corrente', 'JorgeArts'),
	(84, 2, 'carros', 'itau', 'VolthdasArtes'),
	(85, 3, 'vanila', 'nubank', 'artuzinmilGRau'),
	(86, 4, 'barroco', 'bradesco', 'martadasartes'),
	(87, 5, 'awdaweae', 'dawdawdawdadad', 'Kevincrys'),
	(88, 6, 'asdasda', 'sadasdasdasdasdasdsd', 'santh'),
	(92, 8, 'barroco', 'bradesco conta corrente', 'Luisdesing'),
	(12, 16, 'web', 'bradesco', 'kecry'),
	(4, 23, 'neoclassica', 'bradesco', 'arteees'),
	(104, 24, 'neoclassica', 'bradesco', 'wadswad'),
	(5, 25, 'neoclassica', 'bradesco', 'geeeer');
/*!40000 ALTER TABLE `cliente_profissional` ENABLE KEYS */;

-- Copiando dados para a tabela base1.imagens: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `imagens` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagens` ENABLE KEYS */;

-- Copiando dados para a tabela base1.portfólio: ~11 rows (aproximadamente)
/*!40000 ALTER TABLE `portfólio` DISABLE KEYS */;
INSERT INTO `portfólio` (`profid`, `Descrição`, `Preço1`, `Preço2`, `Preço3`) VALUES
	(1, 'portfólio dedicado a demostras as melhores artes desse site, só trabalho bem feito porque essa é minha especialidade, chega junto', 40, 60, 80),
	(2, NULL, NULL, NULL, NULL),
	(3, 'minha arte para voces', 10, 30, 50),
	(4, NULL, NULL, NULL, NULL),
	(5, NULL, NULL, NULL, NULL),
	(6, NULL, NULL, NULL, NULL),
	(8, 'descrição desse projeto', NULL, NULL, NULL),
	(16, 'troca', 40, 60, 80),
	(23, NULL, NULL, NULL, NULL),
	(24, NULL, NULL, NULL, NULL),
	(25, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `portfólio` ENABLE KEYS */;

-- Copiando dados para a tabela base1.projeto: ~12 rows (aproximadamente)
/*!40000 ALTER TABLE `projeto` DISABLE KEYS */;
INSERT INTO `projeto` (`idProjeto`, `profid`, `nome`, `dataCriação`, `imagens`, `feitoPlataforma`) VALUES
	(4, 3, 'jorgearts', NULL, 'uploads/1642095934728.jpg uploads/1642095934731.jpg uploads/1642095934732.jpg uploads/1642095934733.jpg ', NULL),
	(5, 6, '', NULL, 'uploads/1642099067701.jpg uploads/1642099067702.jpg uploads/1642099067713.jpg ', NULL),
	(11, 4, 'marte', NULL, 'uploads/1642102183142.jpg uploads/1642102183143.jpg uploads/1642102183144.jpg ', NULL),
	(12, 5, '', NULL, 'uploads/1642102302974.jpg uploads/1642102302976.jpg ', NULL),
	(13, 2, 'kkerer', NULL, 'uploads/1642103325349.jpg uploads/1642103325351.jpg uploads/1642103325362.jpg ', NULL),
	(14, 8, '', NULL, 'uploads/1642103407881.jpg uploads/1642103407882.jpg uploads/1642103407883.jpg ', NULL),
	(16, 3, 'tste', NULL, 'uploads/1642108641084.jpg uploads/1642108641085.jpg ', NULL),
	(17, 3, 'teste2', NULL, 'uploads/1642108699859.jpg uploads/1642108699899.jpg uploads/1642108699901.jpg ', NULL),
	(18, 1, 'projeto 1', NULL, 'uploads/1642117868339.jpg uploads/1642117868362.jpg ', NULL),
	(19, NULL, 'artedoKevin', NULL, 'uploads/1643308679605.jpg ', NULL),
	(20, NULL, 'teste', NULL, 'uploads/1643309001446.jpg ', NULL),
	(21, NULL, 'ciep', NULL, 'uploads/1643309042579.jpg ', NULL);
/*!40000 ALTER TABLE `projeto` ENABLE KEYS */;

-- Copiando dados para a tabela base1.projeto3: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `projeto3` DISABLE KEYS */;
/*!40000 ALTER TABLE `projeto3` ENABLE KEYS */;

-- Copiando dados para a tabela base1.revisão: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `revisão` DISABLE KEYS */;
INSERT INTO `revisão` (`id`, `numServiço`, `revisão`) VALUES
	(1, 2, 'mt bonita'),
	(2, 3, 'faltando algo eim\r\n');
/*!40000 ALTER TABLE `revisão` ENABLE KEYS */;

-- Copiando dados para a tabela base1.servico: ~8 rows (aproximadamente)
/*!40000 ALTER TABLE `servico` DISABLE KEYS */;
INSERT INTO `servico` (`numServiço`, `clienteid`, `profid`, `descrição`, `preço`, `pacote`, `dataPedido`, `numRevisões`, `revisão`, `statusServiço`, `Imagem`) VALUES
	(1, 12, 1, 'uma casa na lagoa', '40,00', 'basico', '2021-10-01', 2, 1, 'em andamento', NULL),
	(2, 12, 2, 'cachorro bonito', '60,00', 'intermediário', '2021-10-13', 3, 1, 'em andamento', NULL),
	(3, 12, 3, 'carro grande', '80,00', 'premium', '2021-10-11', 0, 1, 'concluido', 'uploads/1643309994304.jpg '),
	(4, 11, 3, 'boitata', '40,00', 'básico', '2021-10-11', 3, 1, 'em andamento', NULL),
	(5, 12, 1, 'teste', NULL, NULL, '2022-01-24', 3, 1, 'Aguardando pagamento', NULL),
	(6, 12, 1, 'stae', '60', NULL, '2022-01-24', 3, 1, 'Aguardando pagamento', NULL),
	(7, 12, 1, 'testeeeeeee', '60', NULL, '2022-01-26', 3, 1, 'Aguardando pagamento', NULL),
	(8, 12, 1, 'definitivo', '60', 'Intermediário', '2022-01-26', 3, 1, 'Aguardando pagamento', NULL),
	(9, 12, 3, 'arte de um carrr', '60', 'Intermediário', '2022-01-27', 3, 1, 'Aguardando pagamento', NULL),
	(10, 12, 3, 'um carro verde ', '60', 'Intermediário', '2022-01-27', 3, 1, 'Aguardando pagamento', NULL),
	(11, 12, 3, 'nova compra 1558', '60', 'Intermediário', '2022-01-27', 3, 1, 'Aguardando pagamento', NULL);
/*!40000 ALTER TABLE `servico` ENABLE KEYS */;

-- Copiando dados para a tabela base1.sessions: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
