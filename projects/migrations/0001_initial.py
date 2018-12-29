# Generated by Django 2.1.4 on 2018-12-29 08:00

import datetime
from django.conf import settings
from django.db import migrations, models
from django.utils.timezone import utc
import multiselectfield.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('cover', models.ImageField(blank=True, upload_to='projects/%Y/%m/%d/')),
                ('description', models.TextField()),
                ('slug', models.SlugField(blank=True)),
                ('technologies', multiselectfield.db.fields.MultiSelectField(choices=[('web', 'Web DEvelopment'), ('app', 'App Development')], max_length=7)),
                ('year', models.DateField(default=datetime.datetime(2018, 12, 29, 8, 0, 21, 925540, tzinfo=utc))),
                ('repo_link', models.CharField(max_length=255)),
                ('team', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
