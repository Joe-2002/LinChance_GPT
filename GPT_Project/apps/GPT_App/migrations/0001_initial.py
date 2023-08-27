# Generated by Django 4.2.3 on 2023-08-14 10:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ChatHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('chat_name', models.CharField(max_length=409600)),
            ],
        ),
        migrations.CreateModel(
            name='ChatMessage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_input', models.CharField(max_length=409600)),
                ('gpt_response', models.CharField(max_length=409600)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('chat_history', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='messages', to='GPT_App.chathistory')),
            ],
        ),
    ]