eval "$(ssh-agent -s)"
ssh-add ../key_git_team_hobasoft
git checkout -- .
git pull origin master
sh init_permission_project.sh