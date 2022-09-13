if controller
if true {Penerima : +628123456789}
if true {teks : Teks ini dan nomer penerima wajib diubah sesuai dengan penerima dan teks nya
if true {gateaway : whatsapp

if true {echo;{"sms telah berhasil dikirim"
if false {echo;{"sms gagal terkirim silahkan coba lagi nanti"

{script.sending:${penerima}
{script.sending;send-on.ending(of.controller{send;whapi.gateaway
{script.send-off;send/whatsapp.com:bot-api;send.true####send/n/n/n${teks}
{send.chat;send-off/whatsapp.com;bot-api#######true~/and/n/n/nsending.${text}

//bagian script jangan diubah yah njing, bikin aja gabisa mau ngerusak
//whatsapp api ini tidak teraffiliasi oleh siapapun bahkan whatsapp

