const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('defaultdb', 'avnadmin', 'AVNS_R61zt1Sy942TV9C5NzW', {
  host: 'prog-async-laurafarias-f70e.k.aivencloud.com',
  port: 10572,
  dialect: 'mysql',
  logging: console.log, 
  define: {
    timestamps: true, 
    underscored: false, 
  },
  pool: {
    max: 10, 
    min: 0,  
    acquire: 30000, 
    idle: 10000, 
  },
});

// Função para testar a conexão
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com MySQL estabelecida com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar com o banco de dados:', error.message);
  }
}

testConnection();

module.exports = sequelize;