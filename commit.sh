branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
git commit -am 'ac'
git push -u origin $branch