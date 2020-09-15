<?php




function getVar($name)
{
  $name = isset($_POST[$name]) ? trim($_POST[$name]) : null;
  return $name;
}

function GetClearPhoneNumber($number) {
  if (empty($number)) {
    return "";
  }
  $number = str_replace('(', '', $number);
  $number = str_replace(')', '', $number);
  $number = str_replace('-', '', $number);
  $number = str_replace('+', '', $number);
  return $number;
}

  $name = getVar('name');
  $phone = getVar('phone');
  $email = getVar('email');


$data = array(
  'orderType' => getVar('orderType'),
  'name' => $name,
  'phone'     => GetClearPhoneNumber($phone),
  'email'     => $email,
  'date_visited' => date("d.m.Y"),
  'time_visited' => date("G:i:s"),
  'page_url' => getVar('page_url'),
  'user_agent' => $_SERVER['HTTP_USER_AGENT'],
  'utm_source' => getVar('utm_source') ? getVar('utm_source')  :  '(direct)',
  'utm_campaign' => getVar('utm_campaign') ? getVar('utm_campaign')  :  '(not set)',
  'utm_medium' => getVar('utm_medium') ? getVar('utm_medium')  :  '(none)',
  'utm_term' => getVar('utm_term') ? getVar('utm_term')  :  '(not set)',
  'utm_content' => getVar('utm_content') ? getVar('utm_content')  :  '(not set)',
  'ref' => getVar('ref'),
  'ip_address' => getVar('ip_address'),
  'city' => getVar('city'),
  'country' => getVar('country'),
  'region' => getVar('region'),
  'client_id' => getVar('client_id'),
  'utmcsr' => getVar('utmcsr'),
  'utmccn' => getVar('utmccn'),
  'utmcmd' => getVar('utmcmd'),
  'affiliate_id' => getVar('affiliate_id'),
  'form_subject' => getVar('form_subject'),
  'click_id' => getVar('click_id')
);

$c = true;

$admin_email = 'Denta.d.kyiv@gmail.com';
$project_name = $data['orderType'];

$to = "denta.d.kyiv@gmail.com";

function adopt($text) {

	return '=?UTF-8?B?'.base64_encode($text).'?=';
}

foreach ($data as $key => $value) {
	if ($value != "") {
		$message .= "
				" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>";
	}
}
$message = "<table style='width: 100%;'>$message</table>";

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($to, adopt($project_name), $message, $headers );