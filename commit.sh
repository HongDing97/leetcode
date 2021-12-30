branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
timestr=$(date "+%Y/%m/%d %H:%M:%S")
git commit -am "ac $timestr"
git push -u origin $branch
