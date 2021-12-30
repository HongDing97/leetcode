branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
time=$(date "+%Y%m%d%H%M%S")
git commit -am 'ac $time'
git push -u origin $branch
