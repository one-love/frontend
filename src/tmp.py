import os

def rename(path):
    for file in os.listdir(path):
        print(path+file)
        bash_command = "cat " + path + file + "| perl -pe 's/\.\.\//\.\.\/\.\.\/;'"
        os.system(bash_command)


root = '/wex/project/one-love/projects/frontend/src/'
for path, subdirs, files in os.walk(root):
    for name in subdirs:
        if (name == 'redux'):
            rename(path+'/redux/')
