from django.shortcuts import render
import re
from math import sqrt, pi, sin, cos, tan

def calc(x):
    try:
        return eval(x)
    except ZeroDivisionError:
        return 'Error'  # Деление на ноль
    except SyntaxError:
        return 'Error'  # Некорректное выражение
    except Exception as e:
        print(e)
        return 'Error'  # Обработка других ошибок


def index(request):
    answer = 0
    if request.method == 'POST':
        # Выводим содержимое POST запроса для отладки
        print(request.POST)

        button_value = request.POST.get('entry_field', '').strip()

        # Проверка на пустой ввод
        if not button_value:
            answer = 'Input is required'
        else:
            try:
                answer = round(calc(button_value), 2)
            except TypeError:
                answer = 'Error'

        return render(request, 'index.html', {'answer': answer})

    return render(request, 'index.html', {'answer': answer})
