if (!document.getElementById("base-layer")) {
    // Main Display
    const mainUI = document.createElement("div");
    mainUI.id = "base-layer";
    mainUI.tabIndex = -1; // Make extension tab focused above webpage

    // Content of the extension below

    // Close Display Button
    // icon variables (dark and light)
    const cancelIconUrl = chrome.runtime.getURL("../images/cancel-icon.png");
    const cancelIconHoverUrl = chrome.runtime.getURL("../images/cancel-icon-hover.png");

    const cancelLayer = document.createElement("div");
    cancelLayer.id = "cancel-layer";
    cancelLayer.innerHTML = `
        <button id="close-ext-btn">
            <img id="cancel-ext-icon" src="${cancelIconUrl}">
        </button>
    `;



    // Title of App
    const appTitle = document.createElement("span");
    appTitle.id = "app-title";
    appTitle.textContent = "WELCOME TO VISKEYS";



    // Virtual Keyboard Component
    const keyboardComp = document.createElement("div");
    keyboardComp.id = "keyboard-comp";

    // First Row of Keyboard
    const firstRow = document.createElement("div");
    firstRow.className = "first-row-keyboard";

    const escKey = document.createElement("div");
    escKey.className = "esc-key-elem";
    const escKey_Text = document.createElement("span");
    escKey_Text.className = "esc-key-text";
    escKey_Text.textContent = "Esc";
    escKey.appendChild(escKey_Text);

    const f1Key = document.createElement("div");
    f1Key.className = "f1-key-elem";
    const f1Key_Text = document.createElement("span");
    f1Key_Text.className = "f1-key-text";
    f1Key_Text.textContent = "F1";
    f1Key.appendChild(f1Key_Text);

    const f2Key = document.createElement("div");
    f2Key.className = "f2-key-elem";
    const f2Key_Text = document.createElement("span");
    f2Key_Text.className = "f2-key-text";
    f2Key_Text.textContent = "F2";
    f2Key.appendChild(f2Key_Text);

    const f3Key = document.createElement("div");
    f3Key.className = "f3-key-elem";
    const f3Key_Text = document.createElement("span");
    f3Key_Text.className = "f3-key-text";
    f3Key_Text.textContent = "F3";
    f3Key.appendChild(f3Key_Text);

    const f4Key = document.createElement("div");
    f4Key.className = "f4-key-elem";
    const f4Key_Text = document.createElement("span");
    f4Key_Text.className = "f4-key-text";
    f4Key_Text.textContent = "F4";
    f4Key.appendChild(f4Key_Text);

    const f5Key = document.createElement("div");
    f5Key.className = "f5-key-elem";
    const f5Key_Text = document.createElement("span");
    f5Key_Text.className = "f5-key-text";
    f5Key_Text.textContent = "F5";
    f5Key.appendChild(f5Key_Text);

    const f6Key = document.createElement("div");
    f6Key.className = "f6-key-elem";
    const f6Key_Text = document.createElement("span");
    f6Key_Text.className = "f6-key-text";
    f6Key_Text.textContent = "F6";
    f6Key.appendChild(f6Key_Text);

    const f7Key = document.createElement("div");
    f7Key.className = "f7-key-elem";
    const f7Key_Text = document.createElement("span");
    f7Key_Text.className = "f7-key-text";
    f7Key_Text.textContent = "F7";
    f7Key.appendChild(f7Key_Text);

    const f8Key = document.createElement("div");
    f8Key.className = "f8-key-elem";
    const f8Key_Text = document.createElement("span");
    f8Key_Text.className = "f8-key-text";
    f8Key_Text.textContent = "F8";
    f8Key.appendChild(f8Key_Text);

    const f9Key = document.createElement("div");
    f9Key.className = "f9-key-elem";
    const f9Key_Text = document.createElement("span");
    f9Key_Text.className = "f9-key-text";
    f9Key_Text.textContent = "F9";
    f9Key.appendChild(f9Key_Text);

    const f10Key = document.createElement("div");
    f10Key.className = "f10-key-elem";
    const f10Key_Text = document.createElement("span");
    f10Key_Text.className = "f10-key-text";
    f10Key_Text.textContent = "F10";
    f10Key.appendChild(f10Key_Text);

    const f11Key = document.createElement("div");
    f11Key.className = "f11-key-elem";
    const f11Key_Text = document.createElement("span");
    f11Key_Text.className = "f11-key-text";
    f11Key_Text.textContent = "F11";
    f11Key.appendChild(f11Key_Text);

    const f12Key = document.createElement("div");
    f12Key.className = "f12-key-elem";
    const f12Key_Text = document.createElement("span");
    f12Key_Text.className = "f12-key-text";
    f12Key_Text.textContent = "F12";
    f12Key.appendChild(f12Key_Text);

    firstRow.appendChild(escKey);
    firstRow.appendChild(f1Key);
    firstRow.appendChild(f2Key);
    firstRow.appendChild(f3Key);
    firstRow.appendChild(f4Key);
    firstRow.appendChild(f5Key);
    firstRow.appendChild(f6Key);
    firstRow.appendChild(f7Key);
    firstRow.appendChild(f8Key);
    firstRow.appendChild(f9Key);
    firstRow.appendChild(f10Key);
    firstRow.appendChild(f11Key);
    firstRow.appendChild(f12Key);


    // Second Row of Keyboard
    const secondRow = document.createElement("div");
    secondRow.className = "second-row-keyboard";

    const accentKey = document.createElement("div");
    accentKey.className = "accent-key-elem";
    const accentKey_Text = document.createElement("span");
    accentKey_Text.className = "accent-key-text";
    accentKey_Text.textContent = "~\n`";
    accentKey_Text.style.whiteSpace = "pre-line";
    accentKey.appendChild(accentKey_Text);

    const g1Key = document.createElement("div");
    g1Key.className = "g1-key-elem";
    const g1Key_Text = document.createElement("span");
    g1Key_Text.className = "g1-key-text";
    g1Key_Text.textContent = "!\n1";
    g1Key_Text.style.whiteSpace = "pre-line";
    g1Key.appendChild(g1Key_Text);

    const g2Key = document.createElement("div");
    g2Key.className = "g2-key-elem";
    const g2Key_Text = document.createElement("span");
    g2Key_Text.className = "g2-key-text";
    g2Key_Text.textContent = "@\n2";
    g2Key_Text.style.whiteSpace = "pre-line";
    g2Key.appendChild(g2Key_Text);

    const g3Key = document.createElement("div");
    g3Key.className = "g3-key-elem";
    const g3Key_Text = document.createElement("span");
    g3Key_Text.className = "g3-key-text";
    g3Key_Text.textContent = "#\n3";
    g3Key_Text.style.whiteSpace = "pre-line";
    g3Key.appendChild(g3Key_Text);

    const g4Key = document.createElement("div");
    g4Key.className = "g4-key-elem";
    const g4Key_Text = document.createElement("span");
    g4Key_Text.className = "g4-key-text";
    g4Key_Text.textContent = "$\n4";
    g4Key_Text.style.whiteSpace = "pre-line";
    g4Key.appendChild(g4Key_Text);

    const g5Key = document.createElement("div");
    g5Key.className = "g5-key-elem";
    const g5Key_Text = document.createElement("span");
    g5Key_Text.className = "g5-key-text";
    g5Key_Text.textContent = "%\n5";
    g5Key_Text.style.whiteSpace = "pre-line";
    g5Key.appendChild(g5Key_Text);

    const g6Key = document.createElement("div");
    g6Key.className = "g6-key-elem";
    const g6Key_Text = document.createElement("span");
    g6Key_Text.className = "g6-key-text";
    g6Key_Text.textContent = "^\n6";
    g6Key_Text.style.whiteSpace = "pre-line";
    g6Key.appendChild(g6Key_Text);

    const g7Key = document.createElement("div");
    g7Key.className = "g7-key-elem";
    const g7Key_Text = document.createElement("span");
    g7Key_Text.className = "g7-key-text";
    g7Key_Text.textContent = "&\n7";
    g7Key_Text.style.whiteSpace = "pre-line";
    g7Key.appendChild(g7Key_Text);

    const g8Key = document.createElement("div");
    g8Key.className = "g8-key-elem";
    const g8Key_Text = document.createElement("span");
    g8Key_Text.className = "g8-key-text";
    g8Key_Text.textContent = "*\n8";
    g8Key_Text.style.whiteSpace = "pre-line";
    g8Key.appendChild(g8Key_Text);

    const g9Key = document.createElement("div");
    g9Key.className = "g9-key-elem";
    const g9Key_Text = document.createElement("span");
    g9Key_Text.className = "g9-key-text";
    g9Key_Text.textContent = "(\n9";
    g9Key_Text.style.whiteSpace = "pre-line";
    g9Key.appendChild(g9Key_Text);

    const g0Key = document.createElement("div");
    g0Key.className = "g0-key-elem";
    const g0Key_Text = document.createElement("span");
    g0Key_Text.className = "g0-key-text";
    g0Key_Text.textContent = ")\n0";
    g0Key_Text.style.whiteSpace = "pre-line";
    g0Key.appendChild(g0Key_Text);

    const dashKey = document.createElement("div");
    dashKey.className = "dash-key-elem";
    const dashKey_Text = document.createElement("span");
    dashKey_Text.className = "dash-key-text";
    dashKey_Text.textContent = "_\n-";
    dashKey_Text.style.whiteSpace = "pre-line";
    dashKey.appendChild(dashKey_Text);

    const plusEqualKey = document.createElement("div");
    plusEqualKey.className = "plus-equal-key-elem";
    const plusEqualKey_Text = document.createElement("span");
    plusEqualKey_Text.className = "plus-equal-key-text";
    plusEqualKey_Text.textContent = "+\n=";
    plusEqualKey_Text.style.whiteSpace = "pre-line";
    plusEqualKey.appendChild(plusEqualKey_Text);

    const backKey = document.createElement("div");
    backKey.className = "back-key-elem";
    const backKey_Text = document.createElement("span");
    backKey_Text.className = "back-key-text";
    backKey_Text.textContent = "Backspace\nDelete";
    backKey_Text.style.whiteSpace = "pre-line";
    backKey.appendChild(backKey_Text);

    secondRow.appendChild(accentKey);
    secondRow.appendChild(g1Key);
    secondRow.appendChild(g2Key);
    secondRow.appendChild(g3Key);
    secondRow.appendChild(g4Key);
    secondRow.appendChild(g5Key);
    secondRow.appendChild(g6Key);
    secondRow.appendChild(g7Key);
    secondRow.appendChild(g8Key);
    secondRow.appendChild(g9Key);
    secondRow.appendChild(g0Key);
    secondRow.appendChild(dashKey);
    secondRow.appendChild(plusEqualKey);
    secondRow.appendChild(backKey);


    // Third Row of Keyboard
    const thirdRow = document.createElement("div");
    thirdRow.className = "third-row-keyboard";

    const tabKey = document.createElement("div");
    tabKey.className = "tab-key-elem";
    const tab_Text = document.createElement("span");
    tab_Text.className = "tab-key-text";
    tab_Text.textContent = "Tab";
    tabKey.appendChild(tab_Text);

    const qKey = document.createElement("div");
    qKey.className = "q-key-elem";
    const qKey_Text = document.createElement("span");
    qKey_Text.className = "q-key-text";
    qKey_Text.textContent = "Q";
    qKey.appendChild(qKey_Text);

    const wKey = document.createElement("div");
    wKey.className = "w-key-elem";
    const wKey_Text = document.createElement("span");
    wKey_Text.className = "w-key-text";
    wKey_Text.textContent = "W";
    wKey.appendChild(wKey_Text);

    const eKey = document.createElement("div");
    eKey.className = "e-key-elem";
    const eKey_Text = document.createElement("span");
    eKey_Text.className = "e-key-text";
    eKey_Text.textContent = "E";
    eKey.appendChild(eKey_Text);

    const rKey = document.createElement("div");
    rKey.className = "r-key-elem";
    const rKey_Text = document.createElement("span");
    rKey_Text.className = "r-key-text";
    rKey_Text.textContent = "R";
    rKey.appendChild(rKey_Text);

    const tKey = document.createElement("div");
    tKey.className = "t-key-elem";
    const tKey_Text = document.createElement("span");
    tKey_Text.className = "t-key-text";
    tKey_Text.textContent = "T";
    tKey.appendChild(tKey_Text);

    const yKey = document.createElement("div");
    yKey.className = "y-key-elem";
    const yKey_Text = document.createElement("span");
    yKey_Text.className = "y-key-text";
    yKey_Text.textContent = "Y";
    yKey.appendChild(yKey_Text);

    const uKey = document.createElement("div");
    uKey.className = "u-key-elem";
    const uKey_Text = document.createElement("span");
    uKey_Text.className = "u-key-text";
    uKey_Text.textContent = "U";
    uKey.appendChild(uKey_Text);

    const iKey = document.createElement("div");
    iKey.className = "i-key-elem";
    const iKey_Text = document.createElement("span");
    iKey_Text.className = "i-key-text";
    iKey_Text.textContent = "I";
    iKey.appendChild(iKey_Text);

    const oKey = document.createElement("div");
    oKey.className = "o-key-elem";
    const oKey_Text = document.createElement("span");
    oKey_Text.className = "o-key-text";
    oKey_Text.textContent = "O";
    oKey.appendChild(oKey_Text);

    const pKey = document.createElement("div");
    pKey.className = "p-key-elem";
    const pKey_Text = document.createElement("span");
    pKey_Text.className = "p-key-text";
    pKey_Text.textContent = "P";
    pKey.appendChild(pKey_Text);

    const leftBKey = document.createElement("div");
    leftBKey.className = "leftB-key-elem";
    const leftBKey_Text = document.createElement("span");
    leftBKey_Text.className = "leftB-key-text";
    leftBKey_Text.textContent = "{\n[";
    leftBKey_Text.style.whiteSpace = "pre-line";
    leftBKey.appendChild(leftBKey_Text);

    const rightBKey = document.createElement("div");
    rightBKey.className = "rightB-key-elem";
    const rightBKey_Text = document.createElement("span");
    rightBKey_Text.className = "rightB-key-text";
    rightBKey_Text.textContent = "}\n]";
    rightBKey_Text.style.whiteSpace = "pre-line";
    rightBKey.appendChild(rightBKey_Text);

    const lineKey = document.createElement("div");
    lineKey.className = "line-key-elem";
    const lineKey_Text = document.createElement("span");
    lineKey_Text.className = "line-key-text";
    lineKey_Text.textContent = "|\n\\";
    lineKey_Text.style.whiteSpace = "pre-line";
    lineKey.appendChild(lineKey_Text);

    thirdRow.appendChild(tabKey);
    thirdRow.appendChild(qKey);
    thirdRow.appendChild(wKey);
    thirdRow.appendChild(eKey);
    thirdRow.appendChild(rKey);
    thirdRow.appendChild(tKey);
    thirdRow.appendChild(yKey);
    thirdRow.appendChild(uKey);
    thirdRow.appendChild(iKey);
    thirdRow.appendChild(oKey);
    thirdRow.appendChild(pKey);
    thirdRow.appendChild(leftBKey);
    thirdRow.appendChild(rightBKey);
    thirdRow.appendChild(lineKey);


    // Fourth Row of Keyboard
    const fourthRow = document.createElement("div");
    fourthRow.className = "fourth-row-keyboard";

    const capsKey = document.createElement("div");
    capsKey.className = "caps-key-elem";
    const caps_Text = document.createElement("span");
    caps_Text.className = "caps-key-text";
    caps_Text.textContent = "Caps Lock";
    capsKey.appendChild(caps_Text);

    const aKey = document.createElement("div");
    aKey.className = "a-key-elem";
    const aKey_Text = document.createElement("span");
    aKey_Text.className = "a-key-text";
    aKey_Text.textContent = "A";
    aKey.appendChild(aKey_Text);

    const sKey = document.createElement("div");
    sKey.className = "s-key-elem";
    const sKey_Text = document.createElement("span");
    sKey_Text.className = "s-key-text";
    sKey_Text.textContent = "S";
    sKey.appendChild(sKey_Text);

    const dKey = document.createElement("div");
    dKey.className = "d-key-elem";
    const dKey_Text = document.createElement("span");
    dKey_Text.className = "d-key-text";
    dKey_Text.textContent = "D";
    dKey.appendChild(dKey_Text);

    const fKey = document.createElement("div");
    fKey.className = "f-key-elem";
    const fKey_Text = document.createElement("span");
    fKey_Text.className = "f-key-text";
    fKey_Text.textContent = "F";
    fKey.appendChild(fKey_Text);

    const gKey = document.createElement("div");
    gKey.className = "g-key-elem";
    const gKey_Text = document.createElement("span");
    gKey_Text.className = "g-key-text";
    gKey_Text.textContent = "G";
    gKey.appendChild(gKey_Text);

    const hKey = document.createElement("div");
    hKey.className = "h-key-elem";
    const hKey_Text = document.createElement("span");
    hKey_Text.className = "h-key-text";
    hKey_Text.textContent = "H";
    hKey.appendChild(hKey_Text);

    const jKey = document.createElement("div");
    jKey.className = "j-key-elem";
    const jKey_Text = document.createElement("span");
    jKey_Text.className = "j-key-text";
    jKey_Text.textContent = "J";
    jKey.appendChild(jKey_Text);

    const kKey = document.createElement("div");
    kKey.className = "k-key-elem";
    const kKey_Text = document.createElement("span");
    kKey_Text.className = "k-key-text";
    kKey_Text.textContent = "K";
    kKey.appendChild(kKey_Text);

    const lKey = document.createElement("div");
    lKey.className = "l-key-elem";
    const lKey_Text = document.createElement("span");
    lKey_Text.className = "l-key-text";
    lKey_Text.textContent = "L";
    lKey.appendChild(lKey_Text);

    const colonKey = document.createElement("div");
    colonKey.className = "colon-key-elem";
    const colonKey_Text = document.createElement("span");
    colonKey_Text.className = "colon-key-text";
    colonKey_Text.textContent = ":\n;";
    colonKey_Text.style.whiteSpace = "pre-line";
    colonKey.appendChild(colonKey_Text);

    const apostropheKey = document.createElement("div");
    apostropheKey.className = "apostrophe-key-elem";
    const apostropheKey_Text = document.createElement("span");
    apostropheKey_Text.className = "apostrophe-key-text";
    apostropheKey_Text.textContent = "\"\n\'";
    apostropheKey_Text.style.whiteSpace = "pre-line";
    apostropheKey.appendChild(apostropheKey_Text);

    const inputKey = document.createElement("div");
    inputKey.className = "input-key-elem";
    const inputKey_Text = document.createElement("span");
    inputKey_Text.className = "input-key-text";
    inputKey_Text.textContent = "Enter\nReturn";
    inputKey_Text.style.whiteSpace = "pre-line";
    inputKey.appendChild(inputKey_Text);

    fourthRow.appendChild(capsKey);
    fourthRow.appendChild(aKey);
    fourthRow.appendChild(sKey);
    fourthRow.appendChild(dKey);
    fourthRow.appendChild(fKey);
    fourthRow.appendChild(gKey);
    fourthRow.appendChild(hKey);
    fourthRow.appendChild(jKey);
    fourthRow.appendChild(kKey);
    fourthRow.appendChild(lKey);
    fourthRow.appendChild(colonKey);
    fourthRow.appendChild(apostropheKey);
    fourthRow.appendChild(inputKey);


    // Fifth Row of Keyboard
    const fifthRow = document.createElement("div");
    fifthRow.className = "fifth-row-keyboard";

    const shift1Key = document.createElement("div");
    shift1Key.className = "shift1-key-elem";
    const shift1_Text = document.createElement("span");
    shift1_Text.className = "shift1-key-text";
    shift1_Text.textContent = "Shift";
    shift1Key.appendChild(shift1_Text);

    const zKey = document.createElement("div");
    zKey.className = "z-key-elem";
    const zKey_Text = document.createElement("span");
    zKey_Text.className = "z-key-text";
    zKey_Text.textContent = "Z";
    zKey.appendChild(zKey_Text);

    const xKey = document.createElement("div");
    xKey.className = "x-key-elem";
    const xKey_Text = document.createElement("span");
    xKey_Text.className = "x-key-text";
    xKey_Text.textContent = "X";
    xKey.appendChild(xKey_Text);

    const cKey = document.createElement("div");
    cKey.className = "c-key-elem";
    const cKey_Text = document.createElement("span");
    cKey_Text.className = "c-key-text";
    cKey_Text.textContent = "C";
    cKey.appendChild(cKey_Text);

    const vKey = document.createElement("div");
    vKey.className = "v-key-elem";
    const vKey_Text = document.createElement("span");
    vKey_Text.className = "v-key-text";
    vKey_Text.textContent = "V";
    vKey.appendChild(vKey_Text);

    const bKey = document.createElement("div");
    bKey.className = "b-key-elem";
    const bKey_Text = document.createElement("span");
    bKey_Text.className = "b-key-text";
    bKey_Text.textContent = "B";
    bKey.appendChild(bKey_Text);

    const nKey = document.createElement("div");
    nKey.className = "n-key-elem";
    const nKey_Text = document.createElement("span");
    nKey_Text.className = "n-key-text";
    nKey_Text.textContent = "N";
    nKey.appendChild(nKey_Text);

    const mKey = document.createElement("div");
    mKey.className = "m-key-elem";
    const mKey_Text = document.createElement("span");
    mKey_Text.className = "m-key-text";
    mKey_Text.textContent = "M";
    mKey.appendChild(mKey_Text);

    const leftComKey = document.createElement("div");
    leftComKey.className = "leftCom-key-elem";
    const leftComKey_Text = document.createElement("span");
    leftComKey_Text.className = "leftCom-key-text";
    leftComKey_Text.textContent = "<\n,";
    leftComKey_Text.style.whiteSpace = "pre-line";
    leftComKey.appendChild(leftComKey_Text);

    const rightPerKey = document.createElement("div");
    rightPerKey.className = "rightPer-key-elem";
    const rightPerKey_Text = document.createElement("span");
    rightPerKey_Text.className = "rightPer-key-text";
    rightPerKey_Text.textContent = ">\n.";
    rightPerKey_Text.style.whiteSpace = "pre-line";
    rightPerKey.appendChild(rightPerKey_Text);

    const quesLineKey = document.createElement("div");
    quesLineKey.className = "quesLine-key-elem";
    const quesLineKey_Text = document.createElement("span");
    quesLineKey_Text.className = "quesLine-key-text";
    quesLineKey_Text.textContent = "?\n/";
    quesLineKey_Text.style.whiteSpace = "pre-line";
    quesLineKey.appendChild(quesLineKey_Text);

    const shift2Key = document.createElement("div");
    shift2Key.className = "shift2-key-elem";
    const shift2Key_Text = document.createElement("span");
    shift2Key_Text.className = "shift2-key-text";
    shift2Key_Text.textContent = "Shift";
    shift2Key.appendChild(shift2Key_Text);

    fifthRow.appendChild(shift1Key);
    fifthRow.appendChild(zKey);
    fifthRow.appendChild(xKey);
    fifthRow.appendChild(cKey);
    fifthRow.appendChild(vKey);
    fifthRow.appendChild(bKey);
    fifthRow.appendChild(nKey);
    fifthRow.appendChild(mKey);
    fifthRow.appendChild(leftComKey);
    fifthRow.appendChild(rightPerKey);
    fifthRow.appendChild(quesLineKey);
    fifthRow.appendChild(shift2Key);


    // Space Row of Keyboard
    const spaceRow = document.createElement("div");
    spaceRow.className = "space-row-keyboard";

    const ctrl1Key = document.createElement("div");
    ctrl1Key.className = "ctrl1-key-elem";
    const ctrl1_Text = document.createElement("span");
    ctrl1_Text.className = "ctrl1-key-text";
    ctrl1_Text.textContent = "Control";
    ctrl1Key.appendChild(ctrl1_Text);

    const alt1Key = document.createElement("div");
    alt1Key.className = "alt1-key-elem";
    const alt1Key_Text = document.createElement("span");
    alt1Key_Text.className = "alt1-key-text";
    alt1Key_Text.textContent = "Option";
    alt1Key.appendChild(alt1Key_Text);

    const os1Key = document.createElement("div");
    os1Key.className = "os1-key-elem";
    const os1Key_Text = document.createElement("span");
    os1Key_Text.className = "os1-key-text";
    os1Key_Text.textContent = "Cmd";
    os1Key.appendChild(os1Key_Text);

    const spaceKey = document.createElement("div");
    spaceKey.className = "space-key-elem";

    const os2Key = document.createElement("div");
    os2Key.className = "os2-key-elem";
    const os2Key_Text = document.createElement("span");
    os2Key_Text.className = "os2-key-text";
    os2Key_Text.textContent = "Cmd";
    os2Key.appendChild(os2Key_Text);

    const alt2Key = document.createElement("div");
    alt2Key.className = "alt2-key-elem";
    const alt2Key_Text = document.createElement("span");
    alt2Key_Text.className = "alt2-key-text";
    alt2Key_Text.textContent = "Option";
    alt2Key.appendChild(alt2Key_Text);

    spaceRow.appendChild(ctrl1Key);
    spaceRow.appendChild(alt1Key);
    spaceRow.appendChild(os1Key);
    spaceRow.appendChild(spaceKey);
    spaceRow.appendChild(os2Key);
    spaceRow.appendChild(alt2Key);


    // Arrows Section of Keyboard
    const arrows = document.createElement("div");
    arrows.className = "arrows-keyboard";

    const upArrowKey = document.createElement("div");
    upArrowKey.className = "upArrow-key-elem";
    const upArrow_Text = document.createElement("span");
    upArrow_Text.className = "upArrow-key-text";
    upArrow_Text.textContent = "N";
    upArrowKey.appendChild(upArrow_Text);

    const leftArrowKey = document.createElement("div");
    leftArrowKey.className = "leftArrow-key-elem";
    const leftArrowKey_Text = document.createElement("span");
    leftArrowKey_Text.className = "leftArrow-key-text";
    leftArrowKey_Text.textContent = "W";
    leftArrowKey.appendChild(leftArrowKey_Text);

    const downArrowKey = document.createElement("div");
    downArrowKey.className = "downArrow-key-elem";
    const downArrowKey_Text = document.createElement("span");
    downArrowKey_Text.className = "downArrow-key-text";
    downArrowKey_Text.textContent = "S";
    downArrowKey.appendChild(downArrowKey_Text);

    const rightArrowKey = document.createElement("div");
    rightArrowKey.className = "rightArrow-key-elem";
    const rightArrowKey_Text = document.createElement("span");
    rightArrowKey_Text.className = "rightArrow-key-text";
    rightArrowKey_Text.textContent = "E";
    rightArrowKey.appendChild(rightArrowKey_Text);

    arrows.appendChild(upArrowKey);
    arrows.appendChild(leftArrowKey);
    arrows.appendChild(downArrowKey);
    arrows.appendChild(rightArrowKey);


    // Add respective key elements to the keyboard component
    keyboardComp.appendChild(firstRow);
    keyboardComp.appendChild(secondRow);
    keyboardComp.appendChild(thirdRow);
    keyboardComp.appendChild(fourthRow);
    keyboardComp.appendChild(fifthRow);
    keyboardComp.appendChild(spaceRow);
    keyboardComp.appendChild(arrows);



    // Gen AI Component
    const genAIComp = document.createElement("div");
    genAIComp.id = "gen-AI-comp";


    // Keyboard Shortcut List Component
    const keyboardSCListComp = document.createElement("div");
    keyboardSCListComp.id = "keyboard-sc-list-comp";


    // Suggestion Section Component
    const suggestSecComp = document.createElement("div");
    suggestSecComp.id = "suggest-sec-comp";


    // Add each element to the the main interface
    mainUI.appendChild(cancelLayer);
    mainUI.appendChild(appTitle);
    mainUI.appendChild(keyboardComp);
    mainUI.appendChild(genAIComp);
    mainUI.appendChild(keyboardSCListComp);
    mainUI.appendChild(suggestSecComp);

    document.body.appendChild(mainUI);

    // mainUI.focus();
    document.getElementById("close-ext-btn").focus();

    // Add close extension functionality
    const cancelBtn = document.getElementById("close-ext-btn");
    const cancelIcon = document.getElementById("cancel-ext-icon");

    cancelBtn.addEventListener("mouseenter", () => {
        cancelIcon.src = cancelIconHoverUrl;
    });

    cancelBtn.addEventListener("mouseleave", () => {
        cancelIcon.src = cancelIconUrl;
    });

    document.getElementById("close-ext-btn").addEventListener("click", () => {
        mainUI.remove();
    });
}