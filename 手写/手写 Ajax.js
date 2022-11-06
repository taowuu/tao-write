// 手写 Ajax
// Ajax 是网络异步请求的统称
// 有 XHR 和 Fetch 等实现方式

// XHR
const ajaxXHR = (method, url) => {
    // 0 未调用 send
    // 1 已经调用 send 正在发送请求
    // 2 send 完成已经接收到全部响应
    // 3 正在解析响应
    // 4 响应解析完成
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                console.log(xhr)
            }
        }
    }
}

// Fetch
const ajaxFetch = url => {
    // 需要设置才能使用 cookie
    // 错误状态码不会 reject
    return fetch(url).then(res => console.log(res))
}
