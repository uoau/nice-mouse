/*
 * 项目思路
 * 1、隐藏原鼠标
 * 2、创建元素
 * 2、
 *
 */
window.onload = ()=>{
    const div = document.createElement('DIV');
    div.className = 'nice-mouse';
    div.innerHTML = `
        <i class="nice-mouse__pointer"></i>
        <span class="nice-mouse__bg"></span>
    `;
    const style = document.createElement("STYLE");
    style.innerHTML = `
        * {
            cursor: none;
        }
        .nice-mouse {
            pointer-events:none;
            width: 5px;
            height: 5px;
            background: red;
            position: fixed;
            left: 0;
            top: 0;
        }
    `;
    document.body.append(div);
    document.body.append(style);
    // 鼠标dom元素

    document.addEventListener('mousemove',(e)=>{
        /*
            default  默认鼠标
            text     输入指针
            pointer  手势指针
            zoom-in  放大
        */
        // const style = window.getComputedStyle(e.target);
        // switch(style.cursor) {
        //     case 'auto':break;
        //     case 'text':break;
        //     case 'pointer':break;
        // }
        div.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    })
    
}
