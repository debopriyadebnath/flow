from django.contrib.auth import authenticate
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers

from .models import User, Profile


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        validators=[validate_password],
    )

    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "first_name",
            "last_name",
            "password",
        ]
        read_only_fields = ["id"]

    def create(self, validated_data):
        password = validated_data.pop("password")

        user = User.objects.create_user(
            password=password,
            **validated_data,
        )

        Profile.objects.create(user=user)

        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(
        write_only=True,
        trim_whitespace=False,
    )

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")

        user = authenticate(
            username=email,
            password=password,
        )

        if not user:
            raise serializers.ValidationError(
                {
                    "detail": "Invalid email or password."
                }
            )

        if not user.is_active:
            raise serializers.ValidationError(
                {
                    "detail": "This account has been disabled."
                }
            )

        attrs["user"] = user
        return attrs


class UserSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "first_name",
            "last_name",
            "full_name",
        ]
        read_only_fields = [
            "id",
            "email",
            "full_name",
        ]

    def get_full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}".strip()


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = [
            "user",
            "date_of_birth",
            "height",
            "weight",
            "blood_group",
            "cycle_length",
            "period_length",
            "last_period_date",
            "pcos",
            "endometriosis",
            "created_at",
            "updated_at",
        ]
        read_only_fields = [
            "created_at",
            "updated_at",
        ]


class ProfileUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            "date_of_birth",
            "height",
            "weight",
            "blood_group",
            "cycle_length",
            "period_length",
            "last_period_date",
            "pcos",
            "endometriosis",
        ]