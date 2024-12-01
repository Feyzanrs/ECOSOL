const createWallet = require('../utils/createWallet');

function main() {
    const wallet = createWallet();
    console.log('Yeni Cüzdan Oluşturuldu:');
    console.log('Public Key (Cüzdan Adresi):', wallet.publicKey);
    console.log('Secret Key (Gizli Anahtar):', wallet.secretKey);
    
    console.log('\n.env dosyası için:');
    console.log(`NEXT_PUBLIC_ADMIN_WALLET_ADDRESS=${wallet.publicKey}`);
}

main();