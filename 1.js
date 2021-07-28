function queensAttack(n, k, r_q, c_q, obstacles) {
    // n = number of th ecolumns and row
    // k = number of obstacles on the board
    // r_q = row number of queens position
    // c_q = the column number of the queens position
    // obstacles[k][2] = each element is an array of 2 integers, the row and column of an obstacle 
    let moves = 0
    let r = r_q
    let c = c_q
    let loopOver = false

    while (r !== n && loopOver == false) { // up
        r += 1
        if (k == 0) {
            moves += 1
        } else if (k == 1) {
            if (c == obstacles[1] && r == obstacles[0]) {
                break
            }
            moves += 1
        } else if (k > 1) {
            for (let i = 0; i < k; i++) {
                let x = Array(r, c).toString()
                let z = obstacles[i].toString()
                if (x == z) {
                    loopOver = true
                    moves -= 1
                    break
                }
            }
            moves += 1
        }
    }
    loopOver = false
    r = r_q
    c = c_q
    while (c !== n && loopOver == false) {  // right
        c += 1
        if (k == 0) {
            moves += 1
        } else if (k == 1) {
            if (c == obstacles[1] && r == obstacles[0]) {
                break
            }
            moves += 1
        } else if (k > 1) {
            for (let i = 0; i < k; i++) {
                let x = Array(r, c).toString()
                let z = obstacles[i].toString()
                if (x == z) {
                    loopOver = true
                    moves -= 1
                    break
                }
            }
            moves += 1
        }
    }
    loopOver = false
    r = r_q
    c = c_q
    while (r !== 1 && loopOver == false) { // down             // !!!!!!!!
        r -= 1
        if (k == 0) {
            moves += 1
        } else if (k == 1) {
            if (c == obstacles[1] && r == obstacles[0]) {
                break
            }
            moves += 1
        } else if (k > 1) {
            for (let i = 0; i < k; i++) {
                let x = Array(r, c).toString()
                let z = obstacles[i].toString()
                if (x == z) {
                    loopOver = true
                    moves -= 1
                    break
                }
            }
            moves += 1
        }
    }
    loopOver = false
    r = r_q
    c = c_q
    while (c !== 1 && loopOver == false) { //left
        c -= 1
        if (k == 0) {
            moves += 1
        } else if (k == 1) {
            if (c == obstacles[1] && r == obstacles[0]) {
                break
            }
            moves += 1
        } else if (k > 1) {
            for (let i = 0; i < k; i++) {
                let x = Array(r, c).toString()
                let z = obstacles[i].toString()
                if (x == z) {
                    loopOver = true
                    moves -= 1
                    break
                }
            }
            moves += 1
        }
    }
    loopOver = false
    c = c_q
    r = r_q
    while (r !== n && c !== 1 && loopOver == false) {  // top left
        c -= 1
        r += 1
        if (k == 0) {
            moves += 1
        } else if (k == 1) {
            if (c == obstacles[1] && r == obstacles[0]) {
                break
            }
            moves += 1
        } else if (k > 1) {
            for (let i = 0; i < k; i++) {
                let x = Array(r, c).toString()
                let z = obstacles[i].toString()
                if (x == z) {
                    loopOver = true
                    moves -= 1
                    break
                }
            }
            moves += 1
        }
    }
    loopOver = false
    c = c_q
    r = r_q
    while (r !== n && c !== n && loopOver == false) { // top right
        c += 1
        r += 1
        if (k == 0) {
            moves += 1
        } else if (k == 1) {
            if (c == obstacles[1] && r == obstacles[0]) {
                break
            }
            moves += 1
        } else if (k > 1) {
            for (let i = 0; i < k; i++) {
                let x = Array(r, c).toString()
                let z = obstacles[i].toString()
                if (x == z) {
                    loopOver = true
                    moves -= 1
                    break
                }
            }
            moves += 1
        }
    }
    loopOver = false
    c = c_q
    r = r_q
    while (r !== 1 && c !== n && loopOver == false) { // bottom right
        c += 1
        r -= 1
        if (k == 0) {
            moves += 1
        } else if (k == 1) {
            if (c == obstacles[1] && r == obstacles[0]) {
                break
            }
            moves += 1
        } else if (k > 1) {
            for (let i = 0; i < k; i++) {
                let x = Array(r, c).toString()
                let z = obstacles[i].toString()
                if (x == z) {
                    loopOver = true
                    moves -= 1
                    break
                }
            }
            moves += 1
        }
    }
    loopOver = false
    c = c_q
    r = r_q
    while (r !== 1 && c !== 1 && loopOver == false) { // bottom left
        c -= 1
        r -= 1
        if (k == 0) {
            moves += 1
        } else if (k == 1) {
            if (c == obstacles[1] && r == obstacles[0]) {
                break
            }
            moves += 1
        } else if (k > 1) {
            for (let i = 0; i < k; i++) {
                let x = Array(r, c).toString()
                let z = obstacles[i].toString()
                if (x == z) {
                    loopOver = true
                    moves -= 1
                    break
                }
            }
            moves += 1
        }
    }
    loopOver = false
    c = c_q
    r = r_q

    return moves
}
