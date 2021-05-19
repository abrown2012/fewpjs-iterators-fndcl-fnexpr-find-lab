const superbowlWin = (arg) => {
    const result = arg.find( ({ result }) => result === 'W' )
    if (result) {return result.year
    } else { return undefined}
}
