# Command Line Basics

These are the commands you need to become familiar with in order to be an "entry-level" hacker.


## Making a new folder/directory
The **mkdir** command will create a new folder
```
mkdir some_new_folder
```

## Changing directories
You can easily switch between directories by using the **cd** command:
```
cd some_folder
```

You can step back a directory by doing the following:
```
cd ..
```

## Creating new files
You can create a new fille by using the **touch** command:
```
touch my_new_file.txt
```

You can also add new files to a folder/directory by passing the pass to the directory along with the file name.
```
touch some_folder/another_file.txt
```

## List all files in a directory
You can list all files in a directory by using the **ls** command:
```
ls some_folder
```

## Removing files
It's pretty simple to remove files using the **mv** command and passing it the name of the file you want to remove.
```
rm my_new_file.txt
```

## Removing entire directories
To remove an entire directory we can use the **rm -rf** command.
```
rm -rf some_folder
```

___

# Git Basics

These are commands you need to know to start some damage with Git:

## Creating a new Git repository

To create a new Git repo inside an existing repo you can use the ** git init** command.
```
git init
```

# Add a file to the staging area

To add a file to the staging area you can use **git add**.
```
git add my_new_file.txt
```

If you want to add everything in the current directory that has been modified use **git add .**, where "." means everything.
```
git add .
```

# Commiting a change
We can commit changes added to staging by using the **git commit** command and passing a message using the **-m** flag.
```
git commit -m "Saved changes to my_new_file.txt"
```

# Pushing changes to Github
We can push our changes to Github using the **git push** command.
```
git push origin master
```

# Clone a repo
You can copy all of the files in a Github repo by using the **git clone** command.
```
git clone http://github.com/some_github_repo
```
