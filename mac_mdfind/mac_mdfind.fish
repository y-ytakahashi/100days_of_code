function peco_search_directory
    set -e name $arg
    echo "input search keyword."
    vared name
    mdfind -onlyin ~/Documents -onlyin ~/OneDrive $name | grep -v "\/\." | peco | read foo

    echo $foo | sed 's/^.*\.\([^\.]*\)$/\1/' | read extention

    switch (echo $extention)
        case ''
            echo 'Command has no arguments'
        case 'pdf'
            open $foo
        case 'csv'
            open $foo
        case 'jpg'
            open $foo
        case 'png'
            open $foo
        case 'gif'
            open $foo
        case '*'
            code $foo
    end

    #change directory
    cd (dirname $foo)
    commandline -f repaint
end