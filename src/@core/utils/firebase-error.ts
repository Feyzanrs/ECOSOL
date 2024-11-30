function getErrorMessage(errorCode: string): string {
  const errorMessages: { [key: string]: string } = {
    'auth/admin-restricted-operation': 'Bu işlem yalnızca yöneticilere özeldir.',
    'auth/argument-error': 'Geçersiz argüman sağlandı.',
    'auth/app-not-authorized': 'Bu uygulama Firebase Authentication kullanma yetkisine sahip değil.',
    'auth/app-not-installed': 'İstenilen uygulama bu cihazda yüklü değil.',
    'auth/captcha-check-failed': 'reCAPTCHA doğrulaması başarısız oldu.',
    'auth/code-expired': 'SMS kodunun süresi doldu.',
    'auth/cordova-not-ready': "Cordova framework'ü hazır değil.",
    'auth/cors-unsupported': 'Bu tarayıcı desteklenmiyor.',
    'auth/credential-already-in-use': 'Bu kimlik bilgisi başka bir hesapla zaten kullanılıyor.',
    'auth/custom-token-mismatch': 'Özel token farklı bir kitle için.',
    'auth/requires-recent-login': 'Bu işlem için son oturum açma gereklidir.',
    'auth/dynamic-link-not-activated': 'Lütfen Firebase Konsolunda Dinamik Bağlantıları etkinleştirin.',
    'auth/email-change-needs-verification': 'E-posta doğrulaması gereklidir.',
    'auth/email-already-in-use': 'E-posta zaten kullanımda',
    'auth/expired-action-code': 'İşlem kodunun süresi doldu.',
    'auth/cancelled-popup-request': 'Çakışan bir açılır pencere nedeniyle işlem iptal edildi.',
    'auth/internal-error': 'Bir iç hata oluştu.',
    'auth/invalid-app-credential': 'Geçersiz uygulama doğrulayıcısı.',
    'auth/invalid-app-id': 'Geçersiz uygulama kimliği.',
    'auth/invalid-user-token': 'Kullanıcı jetonu bu proje için geçerli değil.',
    'auth/invalid-auth-event': 'Bir iç hata oluştu.',
    'auth/invalid-verification-code': 'Geçersiz SMS doğrulama kodu.',
    'auth/invalid-continue-uri': "Geçersiz devam URL'si.",
    'auth/invalid-custom-token': 'Özel token formatı geçersiz.',
    'auth/invalid-email': 'Geçersiz e-posta adresi.',
    'auth/invalid-api-key': 'API anahtarı geçersiz.',
    'auth/invalid-credential': 'Giriş bilgilerinizi kontrol ediniz.',
    'auth/invalid-phone-number': 'Geçersiz telefon numarası formatı.',
    'auth/invalid-provider-id': 'Geçersiz sağlayıcı kimliği.',
    'auth/user-not-found': 'Kullanıcı bulunamadı.',
    'auth/user-disabled': 'Kullanıcı hesabı yönetici tarafından devre dışı bırakıldı.',
    'auth/weak-password': 'Şifre çok zayıf.',
    'auth/network-request-failed': 'Bir ağ hatası oluştu.',
    'auth/too-many-requests': 'Çok fazla istek gönderildi, daha sonra tekrar deneyin.',
    'auth/user-token-expired': 'Oturum süresi dolmuş.',
    'auth/session-cookie-expired': 'Oturum çerezlerinin süresi doldu.',
    'auth/account-exists-with-different-credential': 'Farklı kimlik bilgileriyle bir hesap zaten mevcut.',
    'auth/missing-email': 'E-posta adresiniz yok.',
    'auth/quota-exceeded': 'İstek limiti aşıldı.',
    'auth/invalid-verification-id': 'Geçersiz doğrulama kimliği.',
    'auth/invalid-password': 'Incorrect email / password',
    'auth/wrong-password': 'Hatalı e-posta / şifre',
    'auth/missing-password': 'Şifre yok'
  }
  console.log(errorCode)

  return errorMessages[errorCode] || 'Bir hata oluştu. Lütfen tekrar deneyin'
}

export default getErrorMessage
