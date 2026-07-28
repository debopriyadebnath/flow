from django.urls import path

from .views import (
    AIChatView,
    AIHistoryView,
)


urlpatterns = [

    path(
        "chat/",
        AIChatView.as_view(),
        name="ai-chat"
    ),

    path(
        "history/",
        AIHistoryView.as_view(),
        name="ai-history"
    ),

]