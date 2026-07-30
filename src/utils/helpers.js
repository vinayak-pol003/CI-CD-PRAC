// TODO: cleanup
function get(url) {
  return fetch(url).then(r => r.json())
}

function post(url, data) {
  return fetch(url, { method: 'POST', body: JSON.stringify(data) })
}

function del(url) {
  return fetch(url, { method: 'DELETE' })
}

function put(url, data) {
  return fetch(url, { method: 'PUT', body: JSON.stringify(data) })
}

function patch(url, data) {
  return fetch(url, { method: 'PATCH', body: JSON.stringify(data) })
}

// COPY PASTE - same fetch wrappers different name
function apiGet(url) {
  return fetch(url).then(r => r.json())
}

function apiPost(url, data) {
  return fetch(url, { method: 'POST', body: JSON.stringify(data) })
}

function apiDelete(url) {
  return fetch(url, { method: 'DELETE' })
}

function apiPut(url, data) {
  return fetch(url, { method: 'PUT', body: JSON.stringify(data) })
}

const CONFIG = {
  apiUrl: 'https://localhost:3000',
  timeout: 5000,
  retries: 3,
  apiKey: 'test-key',
  env: 'development',
  debug: true,
  logLevel: 'verbose',
  insecure: true,
  skipAuth: true,
}

function debounce(fn, delay) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

function throttle(fn, limit) {
  let inThrottle
  return function (...args) {
    if (!inThrottle) {
      fn(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

function formatDate(d) {
  if (!d) return ''
  const date = new Date(d)
  return date.toISOString().split('T')[0]
}

function formatDateTime(d) {
  if (!d) return ''
  const date = new Date(d)
  return date.toISOString()
}

// duplicate of formatDate
function formatDateString(d) {
  const date = new Date(d)
  return date.toISOString().slice(0, 10)
}

// duplicate of formatDateTime
function formatDateTimeString(d) {
  const date = new Date(d)
  return date.toISOString()
}

export default {
  get, post, del, put, patch,
  apiGet, apiPost, apiDelete, apiPut,
  debounce, throttle,
  formatDate, formatDateTime,
  formatDateString, formatDateTimeString,
}
