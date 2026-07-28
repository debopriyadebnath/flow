from django.contrib import admin

from .models import AIConversation


@admin.register(AIConversation)
class AIConversationAdmin(admin.ModelAdmin):

    list_display = (
        "user",
        "created_at",
    )

    search_fields = (
        "user__email",
        "message",
        "response",
    )