async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:Kevinbd1999@localhost:3306/base1");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function selectclientes(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM cliente;');
    return rows;
}

async function selectclientesJoinProf(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM cliente JOIN cliente_profissional ON cliente.clienteid=cliente_profissional.clienteid;');
    return rows;
}

async function checalogin(login, senha){

  var sql = 'SELECT * FROM cliente WHERE email =? AND senha= ?';

    const conn = await connect();
    const [rows] = await conn.query(sql, [ login, senha ], function(err, rows, fields) {});
    return rows;
}


async function checacompras(id){

  var sql = 'SELECT *,(SELECT cliente_profissional.nomeArtistico FROM cliente_profissional WHERE cliente_profissional.profid=servico.profid) AS nomeArtístico FROM servico WHERE clienteid =? ';

    const conn = await connect();
    const [rows] = await conn.query(sql, [id], function(err, rows, fields) {});
    return rows;
}


async function checacomprasterminada(id, numServiço){

  var sql = 'SELECT *,(SELECT cliente_profissional.nomeArtistico FROM cliente_profissional WHERE cliente_profissional.profid=servico.profid) AS nomeArtístico FROM servico WHERE clienteid =? and numServiço=? ';

    const conn = await connect();
    const [rows] = await conn.query(sql, [id,numServiço], function(err, rows, fields) {});
    return rows;
}





async function checavendas(id){

  var sql = 'SELECT *,(SELECT cliente.nome FROM cliente WHERE cliente.clienteid=servico.clienteid) AS nomeCliente FROM servico WHERE profid =(SELECT profid FROM cliente_profissional WHERE clienteid =?)';

    const conn = await connect();
    const [rows] = await conn.query(sql, [id], function(err, rows, fields) {});
    return rows;
}




async function checaclientelogin(login){

  var sql = 'SELECT * FROM cliente WHERE email =? LIMIT 1';

    const conn = await connect();
    const [rows] = await conn.query(sql,[login], function(err, rows, fields) {});
    return rows;
}

async function checaclienteid(id){

  var sql = 'SELECT * FROM cliente WHERE clienteid =? LIMIT 1';

    const conn = await connect();
    const [rows] = await conn.query(sql,[id], function(err, rows, fields) {});
    return rows;
}




async function insertclientes(customer){
    const conn = await connect();
    const sql = 'INSERT INTO cliente(idade,email,nome,infoCartão,endereçoCompra,telefone,senha) VALUES (?,?,?,?,?,?,?);';
    const values = [customer.idade, customer.email, customer.nome, customer.infoCartão, customer.endereçoCompra, customer.telefone, customer.senha];
    return await conn.query(sql, values);
}


async function insertCliente_profissional(customer){
    const conn = await connect();
    const sql = 'INSERT INTO cliente_profissional(clienteid,tipoArte,infoBancarias,nomeArtistico) VALUES (?,?,?,?);';
    const values = [customer.clienteid, customer.tipoArte, customer.infoBancarias, customer.nomeArtistico];
    return await conn.query(sql, values);
}



async function updateclientes(clienteid, customer){
    const conn = await connect();
    const sql = 'UPDATE cliente SET idade=?, email=?, nome=?,infoCartão=?,endereçoCompra=?,telefone=?,senha=? WHERE clienteid=?';
    const values = [customer.idade, customer.email, customer.nome,customer.infoCartão,customer.endereçoCompra,customer.telefone,customer.senha, clienteid];
    return await conn.query(sql, values);
}


async function deleteclientes(clienteid){
    const conn = await connect();
    const sql = 'DELETE FROM cliente where clienteid=?;';
    return await conn.query(sql, [clienteid]);
}

module.exports = {selectclientes, insertclientes, updateclientes, deleteclientes, checalogin, insertCliente_profissional, selectclientesJoinProf,checaclientelogin,checaclienteid,checacompras,checavendas,checacomprasterminada}
