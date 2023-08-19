import http from "@/utils/http"

export function getHistory () {
    return http({
        url: '/chat/history',
    })
}