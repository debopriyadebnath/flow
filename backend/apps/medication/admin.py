from django.contrib import admin

from .models import Medication, Reminder


admin.site.register(Medication)
admin.site.register(Reminder)