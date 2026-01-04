source_exe=exercises/stream-api/02
source_sol=solutions/stream-api/02
exe=exe/stream-api-02
sol=sol/stream-api-02
git push origin --delete $exe
git push origin --delete $sol

git add .
git stash
git switch $source_exe
git pull
git checkout --orphan $exe
rm -rf .github/ .devcontainer.json .vscode/ .gitignore
cp -r ../data/.* .
git add .
git commit -m "Initial Commit"
git push
git stash
git switch $source_sol
git pull
rm -rf ../tmp
mkdir ../tmp
cp -r *.java ../tmp
git switch $exe
git checkout -b $sol
mv ../tmp/*.java .
git add .
git commit -m "Solution" -a
git push
git switch main
git branch