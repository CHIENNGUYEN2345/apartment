chown -R www-data.hoanghung_team *
chmod -R 775 *
chown -R www-data.hoanghung_team .git
chmod -R 775 .git
chmod -R 777 cache public/cache
#chown -R  www-data.www-data app/Http/Controllers/Admin/CURDBaseController.php
#chmod -R 700 app/Http/Controllers/Admin/CURDBaseController.php
chown -R  www-data.www-data init_permission_project.sh
chmod -R 700 init_permission_project.sh