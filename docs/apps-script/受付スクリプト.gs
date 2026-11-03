/**
 * WEC HP 資料請求・お問い合わせ 受付スクリプト
 *
 * ホームページのフォームから送られた内容を、このスプレッドシートに1件1行で追加し、
 * 通知メールを送ります。
 *
 * 設置方法:スプレッドシートの「拡張機能 > Apps Script」に全文を貼り付けて保存し、
 * 「デプロイ > 新しいデプロイ > ウェブアプリ」で公開します。
 */

// ▼ 通知メールの送り先(複数のときはカンマ区切り)。ここだけ書き換えてください。
const NOTIFY_TO = 'example@wecnrt.co.jp';

const SHEETS = {
  download: '資料請求',
  contact: 'お問い合わせ',
};

function doPost(e) {
  const p = (e && e.parameter) || {};

  // スパム対策:人には見えない入力欄(_gotcha)に値が入っていたら記録しない
  if (p._gotcha) {
    return json_({ ok: true });
  }

  const isDownload = String(p.form_type || '').indexOf('資料請求') !== -1;
  const sheet = SpreadsheetApp.getActive().getSheetByName(isDownload ? SHEETS.download : SHEETS.contact);
  const now = new Date();

  // 先頭に ' を付けると、電話番号の先頭の 0 などがそのまま残る
  const t = (v) => "'" + String(v || '').trim();

  let row, subject, body;
  if (isDownload) {
    row = [now, t(p.company), t(p.last_name), t(p.first_name), t(p.email), t(p.phone),
           t(p.job_title), t(p.department), '未対応', '', '', ''];
    subject = '【HP】資料請求がありました:' + (p.company || '');
    body = [
      'ホームページから資料請求がありました。',
      '',
      '会社名:' + (p.company || ''),
      'お名前:' + (p.last_name || '') + ' ' + (p.first_name || ''),
      'メール:' + (p.email || ''),
      '電話:' + (p.phone || ''),
      '役職:' + (p.job_title || ''),
      '部署:' + (p.department || ''),
    ].join('\n');
  } else {
    const types = { service: 'サービスについて', price: '料金について', other: 'その他' };
    const type = types[p.inquiry_type] || p.inquiry_type || '';
    row = [now, t(p.name), t(p.company), t(p.department), t(p.email), t(p.phone),
           t(type), t(p.message), '未対応', '', '', ''];
    subject = '【HP】お問い合わせがありました:' + (p.company || '');
    body = [
      'ホームページからお問い合わせがありました。',
      '',
      'お名前:' + (p.name || ''),
      '会社名:' + (p.company || ''),
      '部署:' + (p.department || ''),
      'メール:' + (p.email || ''),
      '電話:' + (p.phone || ''),
      '種別:' + type,
      '',
      '内容:',
      p.message || '',
    ].join('\n');
  }

  sheet.appendRow(row);

  const url = SpreadsheetApp.getActive().getUrl() + '#gid=' + sheet.getSheetId();
  MailApp.sendEmail({
    to: NOTIFY_TO,
    subject: subject,
    body: body + '\n\n受付一覧:' + url,
    replyTo: p.email || undefined,
  });

  return json_({ ok: true });
}

// 公開URLをブラウザで開いたときの確認用
function doGet() {
  return json_({ ok: true, message: 'WEC HP 受付スクリプトは動いています' });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
